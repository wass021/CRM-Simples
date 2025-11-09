document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) return location.href = '/';
  try {
    const res = await fetch('http://localhost:4000/api/contacts', { headers: { Authorization: `Bearer ${token}` }});
    const data = await res.json();
    const tbody = document.querySelector('#contactsTable tbody');
    tbody.innerHTML = '';
    data.forEach(c => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${c.name}</td><td>${c.email||'-'}</td><td>${c.phone||'-'}</td>`;
      tbody.appendChild(tr);
    });
  } catch (err) {
    alert('Erro ao carregar contatos');
  }
});