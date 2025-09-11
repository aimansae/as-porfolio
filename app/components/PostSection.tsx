import Link from "next/link";
import React from "react";
import { posts } from "../data/posts";
import { formatDate } from "../lib/functions";

const PostSection = async () => {
  // console.log(loadPayload);
  // const payload = await loadPayload();
  // const posts = await payload.find({
  //   collection: "posts",
  //   limit: 2,
  //   sort: "-createdAt",
  // });

  return (
    <section className="p-4 md:p-8 lg:px-4 lg:py-8">
      {/* Header */}
      <header>
        <h1>Latest from the blog</h1>
      </header>

      {/* Blog grid */}
      <div className="grid grid-cols-1 items-stretch gap-4 py-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="group flex h-full flex-col justify-between rounded-xl border border-orange-400/40 bg-gradient-to-br from-gray-900/60 to-black/40 p-4 shadow-[0_0_10px_rgba(251,146,60,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-orange-500 hover:shadow-[0_0_15px_rgba(218,88,36,0.6)]"
          >
            <article className="flex h-full flex-col justify-between space-y-4">
              <h3 className="[font-family:var(--font-roboto)] text-lg leading-snug font-semibold tracking-wide text-gray-200 transition-colors sm:text-xl">
                {post.title}
              </h3>

              <div className="text-right text-xs text-gray-400 italic sm:text-sm">
                <time>{formatDate(post.date)}</time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PostSection;
