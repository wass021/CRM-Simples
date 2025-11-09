document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) return location.href = '/';
  try {
    const res = await fetch('http://localhost:4000/api/contacts', { headers: { Authorization: `Bearer ${token}` }});
    const contacts = await res.json();
    document.getElementById('contactsCount').textContent = contacts.length;
  } catch (err) {
    document.getElementById('contactsCount').textContent = 'Erro';
  }
});