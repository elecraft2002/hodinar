import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import { createClient, repositoryName } from "@/prismicio";

// Import your app's Link Resolver (if your app uses one)

export async function POST() {
  revalidateTag("prismic");

  // const client = createClient();
  // const documents = await client.getAllByIDs(req.body.documents)
  // const urls = documents.map((doc) => prismicH.asLink(doc))


  return NextResponse.json({ revalidated: true, now: Date.now() });
}
