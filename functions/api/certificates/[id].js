export async function onRequest(context) {
  const { request, env, params } = context;
  const id = params && params.id ? String(params.id) : '';
  if (!id) return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400, headers: { 'Content-Type': 'application/json' } });

  // Ensure table exists
  await env.CERTS.prepare(`CREATE TABLE IF NOT EXISTS certificates (
    id TEXT PRIMARY KEY,
    studentName TEXT,
    fatherName TEXT,
    course TEXT,
    grade TEXT,
    startDate TEXT,
    endDate TEXT,
    issueDate TEXT,
    isValid INTEGER
  )`).run();

  if (request.method === 'GET') {
    try {
      const res = await env.CERTS.prepare(`SELECT id, studentName, fatherName, course, grade, startDate, endDate, issueDate, isValid FROM certificates WHERE id = ?`).bind(id).all();
      const row = res && res.results && res.results.length ? res.results[0] : null;
      if (!row) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
      return new Response(JSON.stringify(row), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }

  return new Response(null, { status: 405 });
}
