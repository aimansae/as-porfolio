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
    <div className="pb-16 flex flex-col">
      <div id="blog">
        <h2 className="sm:text-3xl font-bold text-white   mb-6 sm:mb-12">
          Latest from the blog
        </h2>
      </div>

      <div className="mb-4 grid gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="  group gap-2 flex flex-col justify-between  rounded-xl border border-gray-800   hover:bg-gray-600/30 transition-colors p-4 sm:p-6 "
          >
            <article className="flex">
              <h3 className=" sm:text-xl font-semibold leading-snug tracking-tight text-white group-hover:text-purple-400 transition-colors">
                {post.title}
              </h3>
            </article>

            <div className="  text-xs tracking-tight sm:text-sm text-gray-400 italic text-right  transition-colors">
              <time> {formatDate(post.date)}</time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostSection;
