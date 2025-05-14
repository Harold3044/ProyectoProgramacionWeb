const app = document.getElementById('app');

const pages = {
  login: `
    <div class="container">
      <div style="text-align: center;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGI0gfzqtKoN4dXfYHiBMpf8eUdOBKtwGRg&s" alt="Logo" style="width: 60px; border-radius: 50%; margin-bottom: 1rem;">
        <h1 style="color: #1d4ed8;">ReservaSport - Biblos</h1>
      </div>
      <form onsubmit="login(event)">
        <div class="form-group">
          <label>Correo electrónico</label>
          <input id="correo" type="email" required placeholder="usuario@ejemplo.com">
        </div>
        <div class="form-group">
          <label>Contraseña</label>
          <input id="clave" type="password" required placeholder="••••••••">
        </div>
        <button type="submit" class="btn btn-blue">Iniciar Sesión</button>
      </form>
    </div>
  `,

  layout: (content, active) => `
    <header>
      <div style="display:flex; align-items:center;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGI0gfzqtKoN4dXfYHiBMpf8eUdOBKtwGRg&s" alt="Logo" style="width: 40px; border-radius: 50%;">
        <h1>ReservaSport - Biblos</h1>
      </div>
      <button onclick="navigate('login')" class="btn btn-blue" style="width:auto; padding: 0.5rem 1rem;">Cerrar sesión</button>
    </header>
    <div class="flex">
      <aside>
        <a href="#" class="${active === 'inicio' ? 'active' : ''}" onclick="navigate('inicio')">🏠 Inicio</a>
        <a href="#" class="${active === 'reservas' ? 'active' : ''}" onclick="navigate('reservas')">📅 Mis Reservas</a>
        <a href="#" class="${active === 'promociones' ? 'active' : ''}" onclick="navigate('promociones')">🏷️ Promociones</a>
        <a href="#" class="${active === 'soporte' ? 'active' : ''}" onclick="navigate('soporte')">💬 Soporte</a>
      </aside>
      <main>${content}</main>
    </div>
  `,

  inicio: `
    <h2>Canchas Disponibles (8:00 p.m. - 11:00 p.m.)</h2>
    <div class="card">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwhORi60jepd4apgOtW01j9F8jBHUVWul0ETuiwoXQhx5dy1-wcbsiWKyvaOvOFZWB4mzZRn8cWoVf63xIwXErEktFeVmKTT1DioIV_l6snxIbwgUSVMovv_ct1t1NLM_AwOQ_j6UEE_4/w1200-h630-p-k-no-nu/la-bombonera-1.jpg">
      <div class="card-content">
        <h3>Cancha Techada Nº1</h3>
        <p>8:00pm - 9:00pm</p>
        <p style="color: #10b981;">✅ Disponible</p>
        <button class="btn btn-green">Reservar</button>
      </div>
    </div>
    <div class="card">
      <img src="https://pbs.twimg.com/media/C7yDNCyXQAID1F2?format=jpg&name=large">
      <div class="card-content">
        <h3>Cancha Techada Nº2</h3>
        <p>9:00pm - 10:00pm</p>
        <p style="color: red;">🚫 Apartada</p>
        <button class="btn btn-gray" disabled>No disponible</button>
      </div>
    </div>
    <div class="card">
      <img src="https://elpilon.com.co/wp-content/uploads/2019/03/cancha-cintetica-JOAQUIN-RAMIREZ-31.jpg">
      <div class="card-content">
        <h3>Cancha Abierta Nº1</h3>
        <p>10:00pm - 11:00pm</p>
        <p style="color: #10b981;">✅ Disponible</p>
        <button class="btn btn-green">Reservar</button>
      </div>
    </div>
  `,

  reservas: `
    <h2>Mis Reservas</h2>
    <div class="card">
      <div class="card-content">
        <h3>Cancha Techada Nº1</h3>
        <p>Fecha: 14/05/2025 - 8:00pm a 9:00pm</p>
        <span style="color: #10b981;">✅ Confirmada</span>
        <button class="btn btn-blue" style="margin-top:1rem; background-color:#dc2626;">Cancelar</button>
      </div>
    </div>
  `,

  promociones: `
    <h2>Promociones</h2>
    <div class="card">
      <div class="card-content">
        <h3>50% de descuento</h3>
        <p>Solo para reservas después de las 10:00 p.m.</p>
      </div>
    </div>
  `,

  soporte: `
    <h2>Soporte</h2>
    <div class="card">
      <div class="card-content">
        <form onsubmit="event.preventDefault(); alert('Mensaje enviado');">
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre">
          </div>
          <div class="form-group">
            <label>Mensaje</label>
            <textarea rows="4" placeholder="Describe tu problema..."></textarea>
          </div>
          <button type="submit" class="btn btn-blue">Enviar</button>
        </form>
      </div>
    </div>
  `
};

function navigate(page) {
  if (page === 'login') {
    app.innerHTML = pages.login;
  } else {
    app.innerHTML = pages.layout(pages[page], page);
  }
}

function login(event) {
  event.preventDefault();
  const correo = document.getElementById('correo').value.trim();
  const clave = document.getElementById('clave').value;
  const correoValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo);

  if (!correoValido) {
    alert("Por favor ingresa un correo válido.");
    return;
  }
  if (clave.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  navigate('inicio');
}

// Cargar login al inicio
navigate('login');
