import Link from "next/link";
import { loadPayload } from "../lib/payload";
import React from "react";

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-UK", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
const PostSection = async () => {
  console.log(loadPayload);
  const payload = await loadPayload();
  const posts = await payload.find({
    collection: "posts",
    limit: 2,
    sort: "-createdAt",
  });

  return (
    <div className=" ">
      <div className="flex flex-col  sm:gap-24">
        <div>
          <h2 className="text-3xl mb-12 font-bold text-white ">
            Latest from the blog
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.docs.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group flex flex-col justify-between h-full rounded-xl border border-gray-800   hover:bg-gray-600/30 transition-colors p-6 "
            >
              <article className="flex-1">
                <h3 className="text-xl font-semibold leading-snug tracking-tight text-white group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
              </article>

              <div className="mt-6 text-xs tracking-tight sm:text-sm text-gray-400 italic text-right  transition-colors">
                <time>{formatDate(post.createdAt)}</time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSection;
