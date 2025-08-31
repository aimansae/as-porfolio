import config from "@payload-config";
import "@payloadcms/next/css";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import React, { ReactNode } from "react";
import { importMap } from "./admin/importMap";
import "./custom.scss";

type LayoutProps = {
  children: ReactNode;
};
type ServerFunctionExecutionArgs = {
  name: string;
  args: Record<string, unknown>;
};
const serverFunction = async function (args: ServerFunctionExecutionArgs) {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

const Layout = ({ children }: LayoutProps) => (
  <RootLayout
    config={config}
    importMap={importMap}
    serverFunction={serverFunction}
  >
    {children}
  </RootLayout>
);

export default Layout;
