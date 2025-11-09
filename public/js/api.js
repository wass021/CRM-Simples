const API_BASE = '';

export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = options.headers || {};
  headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`/api${path}`, { ...options, headers });
  const data = await res.json().catch(()=>null);
  if (!res.ok) throw { status: res.status, data };
  return data;
}