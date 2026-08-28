export async function onRequestGet(context) {
  const { env } = context;
  try {
    if (env.DB) {
      const { results } = await env.DB.prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all();
      return new Response(JSON.stringify(results || []), {
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
    const lead = await request.json();
    const id = lead.id || `lead-${Date.now()}`;
    if (env.DB) {
      await env.DB.prepare(
        'INSERT INTO inquiries (id, name, phone, email, course, qualification, message, date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      )
        .bind(
          id,
          lead.name || 'Anonymous',
          lead.phone || '',
          lead.email || '',
          lead.course || 'General Inquiry',
          lead.qualification || '10th Passed',
          lead.message || '',
          lead.date || new Date().toLocaleDateString('en-GB'),
          lead.status || 'New'
        )
        .run();
    }
    return new Response(JSON.stringify({ id, ...lead }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function onRequestPatch(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(Boolean);
  const id = pathParts.length > 2 ? decodeURIComponent(pathParts[pathParts.length - 1]) : null;

  try {
    const body = await request.json();
    if (env.DB && id && body.status) {
      await env.DB.prepare('UPDATE inquiries SET status = ? WHERE id = ?').bind(body.status, id).run();
    }
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function onRequestDelete(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(Boolean);
  const id = pathParts.length > 2 ? decodeURIComponent(pathParts[pathParts.length - 1]) : null;

  if (env.DB && id) {
    await env.DB.prepare('DELETE FROM inquiries WHERE id = ?').bind(id).run();
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}
