import { posts } from "../../data/posts";
import { formatDate } from "@/app/lib/functions";
import { IoTimeOutline } from "react-icons/io5";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: postID } = await params;
  const post = posts.find((p) => p.id === postID);

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </main>
    );
  }
  // const payload = await loadPayload();

  // const result = await payload.find({
  //   collection: "posts",
  //   where: {
  //     id: {
  //       equals: postID,
  //     },
  //   },
  // });
  // const post = result.docs?.[0];

  return (
    <main className="flex min-h-screen flex-col gap-y-10 p-6 [font-family:var(--font-roboto)] text-gray-200 sm:p-12 lg:p-20">
      <article className="mx-auto flex max-w-3xl flex-col gap-6">
        {/* Header */}
        <header className="flex flex-col gap-3">
          <h1 className="md:text-2lg my-2 [font-family:var(--font-bungee)] text-2xl tracking-wide sm:text-3xl">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="flex items-center gap-2 text-xs text-gray-400 italic sm:text-sm"
          >
            <IoTimeOutline className="text-[#da5824]" />
            {formatDate(post.date)}
          </time>
        </header>
        {/* Subtitle */}
        {post.subtitle && (
          <section>
            <p className="text-lg text-gray-300 italic">{post.subtitle}</p>
          </section>
        )}
        {/* Intro */}
        {post.description?.intro && (
          <section>
            <p className="leading-relaxed">{post.description.intro}</p>
          </section>
        )}
        {/* Main Section */}
        {post.description?.sectionTitle && (
          <section className="space-y-4">
            <p className="my-4 [font-family:var(--font-bungee)] text-xl font-semibold text-[#da5824]">
              {post.description.sectionTitle}
            </p>
            <ul className="flex list-inside list-disc flex-col gap-3 px-6 text-sm text-gray-300 sm:text-base">
              {post.description.list.map((item: string, index) => (
                <li key={`${post.id}+desc${index}`}>{item}</li>
              ))}
            </ul>
          </section>
        )}
        {/* Outro */}
        {post.description?.outro?.length > 0 && (
          <div className="space-y-3">
            {post.description.outro.map((text: string, index: number) => (
              <p key={`${post.id}+outro+${index}`} className="leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        )}
        {/* Closing */}
        {post.closingText && (
          <div className="border-t border-orange-500/30 pt-4">
            <p className="text-gray-300">{post.closingText}</p>
          </div>
        )}
      </article>
    </main>
  );
}
