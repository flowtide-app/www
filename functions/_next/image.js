export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetUrl = url.searchParams.get("url");

  if (
    targetUrl &&
    (targetUrl.startsWith("http://") || targetUrl.startsWith("https://"))
  ) {
    return Response.redirect(targetUrl, 301);
  }

  return new Response('Invalid or missing "url" parameter.', { status: 400 });
}
