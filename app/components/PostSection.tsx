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
        <h3 className="py-4 [font-family:var(--font-bungee)] text-2xl tracking-wide sm:text-3xl">
          Latest from the blog
        </h3>
      </header>

      {/* Blog grid */}
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="group flex flex-col justify-between rounded-xl border border-orange-400/40 bg-gradient-to-br from-gray-900/60 to-black/40 p-6 shadow-[0_0_10px_rgba(251,146,60,0.3)] backdrop-blur-md transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(218,88,36,0.6)]"
          >
            <article className="space-y-4">
              <h3 className="[font-family:var(--font-roboto)] text-lg leading-snug font-semibold tracking-wide text-gray-200 transition-colors group-hover:text-[#da5824] sm:text-xl">
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
