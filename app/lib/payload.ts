import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function loadPayload() {
  const payload = await getPayload({ config: configPromise });
  return payload;
}
