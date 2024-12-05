import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  console.log(posts);
  return rss({
    title: `Blog - ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
      content: post.body,
      heroImage: post.collection,
    })),
  });
}
