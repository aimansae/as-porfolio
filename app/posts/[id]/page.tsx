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
    <main className="container mx-auto flex h-full max-w-6xl flex-col p-4 text-gray-200 md:p-8 lg:px-4 lg:py-8">
      <article className="mx-auto flex flex-col gap-6">
        {/* Header */}
        <header className="flex flex-col gap-3">
          <h1>{post.title}</h1>
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
          <section className="py-6">
            <p className="text-lg text-gray-300 italic">{post.subtitle}</p>
          </section>
        )}

        {/* Intro */}
        {post.description?.intro && (
          <section>
            <p className="leading-relaxed text-gray-200 sm:text-base">
              {post.description.intro}
            </p>
          </section>
        )}

        {/* Main Section */}
        {post.description?.sectionTitle && (
          <section className="space-y-4">
            <h2 className="py-6 [font-family:var(--font-bungee)] text-xl tracking-wide sm:text-2xl">
              {post.description.sectionTitle}
            </h2>
            <ul className="grid gap-3 text-sm text-gray-200 sm:text-base md:grid-cols-2 md:gap-6">
              {post.description.list.map((item: string, index) => (
                <li key={`${post.id}+desc${index}`} className="listStyle">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Outro */}
        {post.description?.outro?.length > 0 && (
          <div className="space-y-3">
            {post.description.outro.map((text: string, index: number) => (
              <p
                key={`${post.id}+outro+${index}`}
                className="leading-relaxed text-gray-200 sm:text-base"
              >
                {text}
              </p>
            ))}
          </div>
        )}

        {/* Closing */}
        {post.closingText && (
          <div className="pb-6">
            <p className="text-gray-200">{post.closingText}</p>
          </div>
        )}
      </article>
    </main>
  );
}
