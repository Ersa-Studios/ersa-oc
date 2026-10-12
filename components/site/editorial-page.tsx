import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { BrandHeader } from "./brand-header";
import { BrandFooter } from "./brand-footer";
import { ScrollText } from "./scroll-text";
import styles from "./editorial-page.module.css";

export function EditorialPage({children,platform}:{children:ReactNode;platform?:"wearable"|"compute"}) {
  return <main className={`${styles.page} ${platform?styles[platform]:""}`}>{children}<BrandFooter /></main>;
}
export function EditorialHero({children,media,photo,map=false}:{children:ReactNode;media?:ReactNode;photo?:string;map?:boolean}) {
  return <section className={`${styles.hero} ${photo?styles.photoHero:""} ${map?styles.mapHero:""}`}><div className={styles.frame}>
    {photo&&<div className={styles.heroPhoto}><Image src={photo} alt="" fill priority unoptimized sizes="100vw" /></div>}
    <BrandHeader /><div className={styles.heroBody}><div className={styles.heroCopy}>{children}</div>{media}</div>
  </div></section>;
}
export function EditorialSection({id,title,label,description,children}:{id:string;title:string;label:string;description?:string;children:ReactNode}) {
  return <section className={styles.section} id={id} aria-labelledby={`${id}-title`}><div className={styles.contentFrame}><div className={styles.heading}><div><p className={styles.label}>{label}</p><ScrollText id={`${id}-title`}>{title}</ScrollText></div>{description&&<p>{description}</p>}</div>{children}</div></section>;
}
export function EditorialImage({src,alt,className,position}:{src:string;alt:string;className?:string;position?:string}) {
  return <div className={`${styles.featureMedia} ${className??""}`}><Image src={src} alt={alt} fill unoptimized sizes="(max-width:760px) 90vw, 45vw" style={{objectPosition:position} as CSSProperties} /></div>;
}
export { styles as editorialStyles };
