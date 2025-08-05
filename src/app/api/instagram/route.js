export async function GET() {
  const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,permalink&access_token=${ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram posts");
    }

    const data = await response.json();

    return new Response(JSON.stringify(data.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      { status: 500 }
    );
  }
}
