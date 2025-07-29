import { Metadata } from "next";
import config from "@payload-config";
import { NotFoundPage, generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap";
type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};
// Correctly typed function parameters
export const generateMetadata = ({
  params,
  searchParams,
}: {
  params: { [key: string]: string | string[] };
  searchParams?: { [key: string]: string | string[] };
}): Promise<Metadata> => {
  return generatePageMetadata({
    config,
    params: Promise.resolve(params),
    searchParams: Promise.resolve(searchParams ?? {}),
  });
};

const NotFound = async ({ params, searchParams }: Args) => {
  return NotFoundPage({
    config,
    importMap,
    params,
    searchParams,
  });
};

export default NotFound;
