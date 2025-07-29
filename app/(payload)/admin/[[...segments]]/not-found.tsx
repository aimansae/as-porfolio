import { Metadata } from "next";
import config from "@payload-config";
import { RootPage, generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap";

type Params = { segments?: string[] };
type RawSearchParams = { [key: string]: string | string[] | undefined };
type SearchParams = { [key: string]: string | string[] };

// ✅ Strip undefined values from searchParams
function cleanSearchParams(params: RawSearchParams): SearchParams {
  const cleaned: SearchParams = {};
  for (const key in params) {
    const val = params[key];
    if (val !== undefined) cleaned[key] = val;
  }
  return cleaned;
}

// ✅ generateMetadata for Next.js <head>
export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: RawSearchParams;
}): Promise<Metadata> => {
  return generatePageMetadata({
    config,
    params: Promise.resolve({ segments: params.segments || [] }),
    searchParams: Promise.resolve(cleanSearchParams(searchParams)),
  });
};

// ✅ Admin page render
export default function AdminPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: RawSearchParams;
}) {
  return RootPage({
    config,
    importMap,
    params: Promise.resolve({ segments: params.segments || [] }),
    searchParams: Promise.resolve(cleanSearchParams(searchParams)),
  });
}
