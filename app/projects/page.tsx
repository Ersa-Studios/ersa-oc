// app/projects/page.tsx
import Image from "next/image";
import { Navbar } from "@/components/site/navbar";

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "OpenScope",
    description:
      "A low-cost, open-source oscilloscope kit for community labs and classrooms.",
    image: "/window.svg",
  },
  {
    title: "Delhi Mesh",
    description:
      "Community Wi‑Fi mesh nodes with locally manufactured PCBs and enclosure.",
    image: "/globe.svg",
  },
  {
    title: "SolarSense",
    description:
      "Open hardware data logger for small solar installations across rooftops.",
    image: "/file.svg",
  },
  {
    title: "AgriProbe",
    description:
      "Field‑ready soil and air sensors with long‑range telemetry for farmers.",
    image: "/next.svg",
  },
  {
    title: "BioKit",
    description:
      "Affordable biology starter kit: incubator, centrifuge, and DIY consumables.",
    image: "/vercel.svg",
  },
  {
    title: "MakerCNC",
    description:
      "Desktop CNC with open controller stack and local supply chain support.",
    image: "/window.svg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-[calc(100vh-56px)]">
        <section className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight">
            Projects
          </h1>
          <p className="mt-3 text-zinc-300 max-w-[70ch]">
            A selection of ongoing builds and experiments from our community.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors"
              >
                <div className="relative w-full aspect-[7/3] bg-black/20">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-6 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
