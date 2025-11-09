document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  try {
    const res = await fetch('http://localhost:4000/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Contato salvo com sucesso!');
      console.log('Novo contato:', data.contact);
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert('Erro de conexão com o servidor.');
    console.error(err);
  }
});