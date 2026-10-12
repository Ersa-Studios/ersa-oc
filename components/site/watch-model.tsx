"use client";

import { useEffect, useRef, useState } from "react";

/** Render the supplied binary STL directly; no substitute watch geometry. */
export function WatchModel({ className }: { className?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    const gl = el.getContext("webgl", { alpha: true, antialias: true });
    if (!gl) { setFailed(true); return; }
    let disposed = false;
    const abort = new AbortController();
    const shaders: WebGLShader[] = [];
    const buffers: WebGLBuffer[] = [];
    const shader = (type: number, source: string) => {
      const s = gl.createShader(type)!; gl.shaderSource(s, source); gl.compileShader(s); shaders.push(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error("Unable to render watch");
      return s;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, shader(gl.VERTEX_SHADER, `
      attribute vec3 position; attribute vec3 normal; attribute vec2 uv;
      uniform vec2 tilt; uniform float aspect; varying vec3 n; varying vec2 tex;
      void main() {
        float a=tilt.x, b=tilt.y;
        mat3 rx=mat3(1.,0.,0.,0.,cos(a),sin(a),0.,-sin(a),cos(a));
        mat3 ry=mat3(cos(b),0.,-sin(b),0.,1.,0.,sin(b),0.,cos(b));
        mat3 r=ry*rx; vec3 p=r*position;
        gl_Position=vec4(p.x/aspect,p.y,-p.z*.45,1.); n=r*normal; tex=uv;
      }`));
    gl.attachShader(program, shader(gl.FRAGMENT_SHADER, `
      precision mediump float; varying vec3 n; varying vec2 tex;
      uniform sampler2D face; uniform bool screen;
      void main() {
        if(screen) { gl_FragColor=texture2D(face,tex); return; }
        float light=.3+.7*max(dot(normalize(n),normalize(vec3(-.5,.8,1.))),0.);
        float sheen=pow(max(dot(normalize(n),normalize(vec3(.3,.6,1.))),0.),20.);
        gl_FragColor=vec4(vec3(.68,.70,.66)*light+sheen*.20,1.);
      }`));
    gl.linkProgram(program); gl.useProgram(program);
    const attrs = ["position", "normal", "uv"].map(name => gl.getAttribLocation(program, name));
    const tilt = gl.getUniformLocation(program, "tilt");
    const aspect = gl.getUniformLocation(program, "aspect");
    const screen = gl.getUniformLocation(program, "screen");
    let geometry: Float32Array | undefined;
    let texture: WebGLTexture | null = null;
    let tx = -.27, ty = -.32;
    const upload = (data: Float32Array) => {
      const b = gl.createBuffer()!; buffers.push(b); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW); return b;
    };
    let caseBuffer: WebGLBuffer, faceBuffer: WebGLBuffer;
    const bind = (b: WebGLBuffer) => {
      gl.bindBuffer(gl.ARRAY_BUFFER,b);
      attrs.forEach((a,i) => { gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a,i===2?2:3,gl.FLOAT,false,32,i===0?0:i===1?12:24); });
    };
    const render = () => {
      if (!geometry || disposed) return;
      const {width,height} = el.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio,2);
      el.width = Math.round(width*ratio); el.height = Math.round(height*ratio);
      gl.viewport(0,0,el.width,el.height); gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST); gl.uniform2f(tilt,tx,ty); gl.uniform1f(aspect,width/height);
      gl.uniform1i(screen,0); bind(caseBuffer); gl.drawArrays(gl.TRIANGLES,0,geometry.length/8);
      if (texture) { gl.uniform1i(screen,1); gl.bindTexture(gl.TEXTURE_2D,texture); bind(faceBuffer); gl.drawArrays(gl.TRIANGLES,0,6); }
    };
    const observer = new ResizeObserver(render); observer.observe(el);
    const move = (e: PointerEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const r=el.getBoundingClientRect(); tx=-.27+(e.clientY-r.top-r.height/2)/r.height*.2; ty=-.32+(e.clientX-r.left-r.width/2)/r.width*.3; render();
    };
    const leave=()=>{tx=-.27;ty=-.32;render();};
    el.addEventListener('pointermove',move); el.addEventListener('pointerleave',leave);
    fetch('/platforms/wearable/case-top.stl',{signal:abort.signal}).then(r=>{if(!r.ok)throw new Error('Missing model');return r.arrayBuffer();}).then(b=>{
      if(disposed)return;
      const view=new DataView(b), count=view.getUint32(80,true), data:number[]=[];
      for(let i=0;i<count;i++) {
        const offset=84+i*50; const nx=-view.getFloat32(offset,true),ny=-view.getFloat32(offset+4,true),nz=-view.getFloat32(offset+8,true);
        for(let j=0;j<3;j++) {const v=offset+12+j*12;data.push(-(view.getFloat32(v,true)-2)/37,-(view.getFloat32(v+4,true)+19.25)/37,(5-view.getFloat32(v+8,true))/37,nx,ny,nz,0,0);}
      }
      geometry=new Float32Array(data);caseBuffer=upload(geometry);
      // The STL aperture is offset from the case centre. Fit the display to
      // its actual bounds after rotating the case, rather than centring it.
      const left=-12.753, right=13.253, bottom=-10.008, top=16.997;
      const face:number[]=[];
      for(const [x,y,u,v] of [[left,bottom,0,0],[right,bottom,1,0],[right,top,1,1],[left,bottom,0,0],[right,top,1,1],[left,top,0,1]]) face.push(x/37,y/37,3.8/37,0,0,1,u,v);
      faceBuffer=upload(new Float32Array(face));render();
      const image=new window.Image();image.onload=()=>{
        if(disposed)return;texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);render();
      };image.src='/platforms/wearable/text_watchface.png';
    }).catch(()=>{if(!disposed)setFailed(true);});
    return()=>{disposed=true;abort.abort();observer.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',leave);buffers.forEach(b=>gl.deleteBuffer(b));shaders.forEach(s=>gl.deleteShader(s));gl.deleteTexture(texture);gl.deleteProgram(program);};
  }, []);
  return <div className={className}><canvas ref={canvas} aria-label="3D view of the supplied watch case STL with the ersa.wearable watchface" role="img" style={{width:"100%",height:"100%",display:"block"}} />{failed && <p>3D preview unavailable. <a href="/platforms/wearable/case-top.stl">Download the case STL</a></p>}</div>;
}
