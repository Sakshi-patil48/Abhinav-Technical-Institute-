export async function onRequestGet(context) {
  const { params, env, request } = context;
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(Boolean);
  const id = pathParts.length > 2 ? decodeURIComponent(pathParts[pathParts.length - 1]).toUpperCase().trim() : null;

  try {
    if (env.DB) {
      if (id) {
        const row = await env.DB.prepare('SELECT raw_json FROM certificates WHERE reg_number = ?')
          .bind(id)
          .first();
        if (row && row.raw_json) {
          return new Response(row.raw_json, {
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          });
        }
        return new Response(JSON.stringify({ error: 'Certificate not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });
      }

      const { results } = await env.DB.prepare('SELECT raw_json FROM certificates ORDER BY created_at DESC').all();
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
    const cert = await request.json();
    const regNumber = String(cert.regNumber || cert.id || '').toUpperCase().trim();
    if (!regNumber || !cert.studentName) {
      return new Response(JSON.stringify({ error: 'Registration number and name required' }), { status: 400 });
    }

    if (env.DB) {
      await env.DB.prepare(
        `INSERT INTO certificates (reg_number, student_name, course_name, grade, percentage, issue_date, valid_until, status, raw_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(reg_number) DO UPDATE SET
           student_name = excluded.student_name,
           course_name = excluded.course_name,
           grade = excluded.grade,
           percentage = excluded.percentage,
           raw_json = excluded.raw_json`
      )
        .bind(
          regNumber,
          cert.studentName,
          cert.courseName || cert.course || 'Vocational Trade',
          cert.grade || 'A Grade',
          cert.percentage || '85%',
          cert.issueDate || new Date().toLocaleDateString(),
          cert.validUntil || 'Lifetime Valid',
          cert.status || 'Valid',
          JSON.stringify(cert)
        )
        .run();
    }

    return new Response(JSON.stringify(cert), {
      status: 201,
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
  const id = pathParts.length > 2 ? decodeURIComponent(pathParts[pathParts.length - 1]).toUpperCase().trim() : null;

  if (env.DB && id) {
    await env.DB.prepare('DELETE FROM certificates WHERE reg_number = ?').bind(id).run();
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}
