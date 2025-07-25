import { loadPayload } from "@/app/lib/payload";
import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: postID } = await params;
  const payload = await loadPayload();

  const result = await payload.find({
    collection: "posts",
    where: {
      id: {
        equals: postID,
      },
    },
  });
  const post = result.docs?.[0];
  console.log("First post****", post);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20">
      <h1 className="text-3xl font-bold mb-6 leading-8 text-center">
        {post.title}
      </h1>
      {post.content && (
        <SerializedRichText className="payload-richText" data={post.content} />
      )}{" "}
    </div>
  );
}
