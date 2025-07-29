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
      <main className="min-h-screen flex items-center justify-center text-white">
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
    <main className="min-h-screen text-base flex flex-col gap-y-10 p-8 pb-20 sm:p-20 bg-gradient-to-br text-white container mx-auto">
      <div className=" flex flex-col gap-4  ">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold leading-8 hover:underline">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 italic"
          >
            <IoTimeOutline className="text-gray-200" />
            {formatDate(post.date)}
          </time>
        </header>

        <section>
          <p>{post.subtitle}</p>
        </section>
        <section>
          <p>{post.description.intro}</p>
        </section>
        <section>
          {" "}
          <p className="my-4 font-bold">{post.description.sectionTitle}</p>
          <ul className="flex flex-col gap-4 px-6 ">
            {post.description.list.map((item, index) => (
              <li className="list-disc list-inside text-gray-200" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <div className="my-4">
            {post.description.outro?.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <div>
            {" "}
            <p>{post.closingText}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
