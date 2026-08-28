export async function onRequestGet(context) {
  const { env } = context;
  try {
    if (env.DB) {
      const { results } = await env.DB.prepare('SELECT raw_json FROM announcements ORDER BY created_at DESC').all();
      const list = (results || []).map((r) => {
        try {
          return JSON.parse(r.raw_json);
        } catch {
          return null;
        }
      }).filter(Boolean);

      return new Response(JSON.stringify(list), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
  } catch (e) {}

  return new Response(JSON.stringify([]), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const ann = await request.json();
    const id = ann.id || `ann-${Date.now()}`;
    if (env.DB) {
      await env.DB.prepare(
        'INSERT INTO announcements (id, title, title_mr, description, tag, date, raw_json) VALUES (?, ?, ?, ?, ?, ?, ?)'
      )
        .bind(
          id,
          ann.title || 'Notice',
          ann.titleMr || ann.title || 'सूचना',
          ann.description || '',
          ann.tag || 'Notice',
          ann.date || new Date().toLocaleDateString('en-GB'),
          JSON.stringify(ann)
        )
        .run();
    }
    return new Response(JSON.stringify({ id, ...ann }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
