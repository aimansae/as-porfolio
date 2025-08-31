import config from "@payload-config";
import { RootPage, generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap";
import { Metadata } from "next";

export const generateMetadata = ({
  params,
  searchParams,
}: {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
}): Promise<Metadata> => generatePageMetadata({ config, params, searchParams });

const Page = ({
  params,
  searchParams,
}: {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
}) =>
  RootPage({
    config,
    importMap,
    params,
    searchParams,
  });

export default Page;
