// app/blog/page.tsx
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { Navbar } from "@/components/site/navbar";

type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date?: string;
};

function readBlogs(): BlogMeta[] {
  const blogsDir = path.join(process.cwd(), "public", "blogs");
  if (!fs.existsSync(blogsDir)) return [];

  return fs
    .readdirSync(blogsDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const full = path.join(blogsDir, file);
      const raw = fs.readFileSync(full, "utf8");

      // Basic frontmatter: lines starting with '# ' as title and next line as description
      const lines = raw.split(/\r?\n/);
      const titleLine = lines.find((l) => l.trim().startsWith("# ")) || file;
      const title = titleLine.replace(/^#\s+/, "").replace(/\.md$/, "");
      const descIdx = lines.findIndex((l) => l.trim().startsWith("# ")) + 1;
      const description = (lines[descIdx] || "").trim();
      const dateLine = lines.find((l) => l.toLowerCase().startsWith("date:"));
      const date = dateLine ? dateLine.split(":").slice(1).join(":").trim() : undefined;

      return {
        slug: file.replace(/\.md$/, ""),
        title,
        description,
        date,
      } as BlogMeta;
    })
    .sort((a, b) => (a.date && b.date ? a.date.localeCompare(b.date) * -1 : 0));
}

export default function BlogIndexPage() {
  const posts = readBlogs();
  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-[calc(100vh-56px)]">
        <section className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight">
            Blog
          </h1>
          <p className="mt-3 text-zinc-300">Notes, build logs, and field reports.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-5"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                  {post.date ? new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" }) : "Undated"}
                </div>
                <h3 className="mt-2 text-base font-semibold uppercase tracking-[0.12em]">
                  <Link href={`/blogs/${post.slug}`} className="hover:opacity-90">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed line-clamp-3">
                  {post.description || ""}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}


