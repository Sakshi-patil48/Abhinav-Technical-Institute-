export async function onRequestGet(context) {
  const { env } = context;
  try {
    if (env.DB) {
      const row = await env.DB.prepare('SELECT json_data FROM site_content WHERE key = ?')
        .bind('main')
        .first();
      if (row && row.json_data) {
        return new Response(row.json_data, {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });
      }
    }
  } catch (e) {}

  return new Response(JSON.stringify({}), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const payload = await request.json();
    if (env.DB && payload) {
      await env.DB.prepare(
        'INSERT INTO site_content (key, json_data, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP) ON CONFLICT(key) DO UPDATE SET json_data = excluded.json_data, updated_at = CURRENT_TIMESTAMP'
      )
        .bind('main', JSON.stringify(payload))
        .run();
    }
    return new Response(JSON.stringify({ success: true, message: 'Content saved in D1', content: payload }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
