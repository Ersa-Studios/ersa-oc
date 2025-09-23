// app/blogs/[slug]/page.tsx
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/site/navbar";

export const dynamic = "force-static";
export const dynamicParams = false;
export const runtime = "nodejs";

function getMarkdown(slug: string): string | null {
  const full = path.join(process.cwd(), "public", "blogs", `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  return fs.readFileSync(full, "utf8");
}

function listSlugs(): string[] {
  const dir = path.join(process.cwd(), "public", "blogs");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function mdToHtml(md: string): string {
  // ultra-basic Markdown to HTML converter for headings/paragraphs/links/code
  let html = md
    .replace(/^###\s(.+)$/gm, '<h3>$1</h3>')
    .replace(/^##\s(.+)$/gm, '<h2>$1</h2>')
    .replace(/^#\s(.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  html = html
    .split(/\n{2,}/)
    .map((block) => {
      if (/^<h\d>/.test(block) || /^<ul>/.test(block) || /^<pre>/.test(block)) {
        return block;
      }
      return `<p>${block.replace(/\n/g, '<br/>')}</p>`;
    })
    .join("\n");
  return html;
}

type Params = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const raw = getMarkdown(slug);
  if (!raw) return notFound();

  // Extract title and date from simple markdown/frontmatter
  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const dateMatch = raw.match(/^date:\s*(.+)$/mi);
  const title = titleMatch ? titleMatch[1].trim() : slug;
  const dateStr = dateMatch ? dateMatch[1].trim() : undefined;
  const formattedDate = dateStr
    ? new Date(dateStr).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    : undefined;

  const html = mdToHtml(raw);

  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-[calc(100vh-56px)]">
        <section className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-12">
          <div className="mb-6">
            <Link
              href="/blog"
              className="text-[11px] uppercase tracking-[0.18em] text-zinc-400 hover:text-zinc-200"
            >
              ← Back to Blog
            </Link>
          </div>
          <header>
            <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              {formattedDate || "Undated"}
            </div>
            <h1 className="mt-2 text-2xl md:text-3xl font-semibold uppercase tracking-[0.14em]">
              {title}
            </h1>
          </header>
          <article
            className="prose prose-invert prose-zinc max-w-none mt-6 text-[15px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
      </main>
    </>
  );
}

export function generateStaticParams() {
  return listSlugs().map((slug) => ({ slug }));
}


