document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Pegando os valores do formulário
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    let data;
    try {
      data = await res.json();
    } catch {
      data = { message: 'Resposta inválida do servidor' };
    }

    if (res.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('errorMsg').textContent = data.message;
    }

  } catch (err) {
    document.getElementById('errorMsg').textContent = 'Erro de conexão';
  }
});

// Logout
function logout() {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
}