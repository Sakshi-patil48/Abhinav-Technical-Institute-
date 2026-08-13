export async function onRequest(context) {
  const { request, env } = context;
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

  if (request.method === 'POST') {
    try {
      const cert = await request.json();
      if (!cert || !cert.id) return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400, headers: { 'Content-Type': 'application/json' } });

      // Insert (or replace) certificate
      await env.CERTS.prepare(`INSERT OR REPLACE INTO certificates (id, studentName, fatherName, course, grade, startDate, endDate, issueDate, isValid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`)
        .bind(cert.id, cert.studentName, cert.fatherName, cert.course, cert.grade, cert.startDate, cert.endDate, cert.issueDate, cert.isValid ? 1 : 0)
        .run();

      return new Response(JSON.stringify(cert), { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }

  if (request.method === 'GET') {
    try {
      const res = await env.CERTS.prepare(`SELECT id, studentName, fatherName, course, grade, startDate, endDate, issueDate, isValid FROM certificates ORDER BY rowid DESC`).all();
      const results = (res && res.results) ? res.results.map(r => ({ ...r })) : [];
      return new Response(JSON.stringify(results), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }

  return new Response(null, { status: 405 });
}
