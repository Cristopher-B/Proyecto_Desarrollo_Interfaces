// --------- Base de datos simulada (LocalStorage) ----------
function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function guardarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function guardarUsuarioActivo(nombreUsuario) {
    localStorage.setItem("usuarioActivo", nombreUsuario);
}

function obtenerUsuarioActivo() {
    return localStorage.getItem("usuarioActivo");
}

// --------- Actualiza botón de Login/Logout ----------
function actualizarEstadoLogin() {
    const usuarioActivo = localStorage.getItem("usuarioActivo");
    const loginLogoutLink = document.getElementById("loginLogoutLink");

    if (usuarioActivo) {
        loginLogoutLink.textContent = "Cerrar sesión";
        loginLogoutLink.setAttribute("onclick", "cerrarSesion()");
    } else {
        loginLogoutLink.textContent = "Iniciar Sesión";
        loginLogoutLink.setAttribute("onclick", "window.location.href='login.html'");
    }
}

window.onload = actualizarEstadoLogin;

// --------- Cerrar sesión ----------
function cerrarSesion() {
    const confirmar = confirm("¿Estás seguro de que deseas cerrar sesión?");

    if (!confirmar) {
        return;  
    }

    localStorage.removeItem("usuarioActivo");
    alert("Has cerrado sesión");
    window.location.href = "index.html";
}

// --------- Protección de rutas ----------
const paginasPublicas = ["login.html", "registro.html", "index.html"];
const paginaActual = window.location.pathname.split("/").pop();

if (!paginasPublicas.includes(paginaActual)) {
    if (!obtenerUsuarioActivo()) {
        window.location.href = "login.html";
    }
}

// --------- Validaciones ----------
function validarCorreo(correo) {
    return /^[^\s@]+@[^\s@]+\.com$/.test(correo);
}

function validarContrasena(pass) {
    return /[A-Z]/.test(pass) && /[0-9]/.test(pass) && pass.length >= 5;
}

// --------- Registro ----------
function registrarUsuario(event) {
    event.preventDefault();

    const usuario = document.getElementById("username").value.trim();
    const correo  = document.getElementById("email").value.trim();
    const pass    = document.getElementById("password").value.trim();
    const pass2   = document.getElementById("confirm-password").value.trim();

    let usuarios = obtenerUsuarios();

    if (usuarios.some(u => u[0] === usuario)) {
        alert("El nombre de usuario ya existe");
        return;
    }

    if (!validarCorreo(correo)) {
        alert("Correo inválido o sin .com");
        return;
    }

    if (!validarContrasena(pass)) {
        alert("La contraseña debe tener mayúscula, número y mínimo 5 caracteres");
        return;
    }

    if (pass !== pass2) {
        alert("Las contraseñas no coinciden");
        return;
    }

    usuarios.push([usuario, correo, pass]);
    guardarUsuarios(usuarios);

    alert("Registro exitoso");
    window.location.href = "login.html";
}

// --------- Login ----------
function iniciarSesion(event) {
    event.preventDefault();

    const usuario = document.getElementById("username").value.trim();
    const pass    = document.getElementById("password").value.trim();

    const usuarios = obtenerUsuarios();
    const encontrado = usuarios.find(u => u[0] === usuario && u[2] === pass);

    if (!encontrado) {
        alert("Usuario o contraseña incorrectos");
        return;
    }

    guardarUsuarioActivo(usuario);
    alert("Bienvenido " + usuario);
    window.location.href = "index.html";
}

// --------- Tema claro/oscuro ----------
const toggleTema = document.getElementById('theme-toggle');
const cuerpo = document.body;
const claseModoClaro = 'light-mode';
const claveTema = 'preferenciaTema';

function aplicarTema(esClaro) {
    if (esClaro) {
        cuerpo.classList.add(claseModoClaro);
        if (toggleTema) toggleTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        cuerpo.classList.remove(claseModoClaro);
        if (toggleTema) toggleTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const preferencia = localStorage.getItem(claveTema);
    aplicarTema(preferencia === 'light');
});

if (toggleTema) {
    toggleTema.addEventListener('click', () => {
        const estaClaro = cuerpo.classList.contains(claseModoClaro);
        const nuevoTema = estaClaro ? 'dark' : 'light';

        aplicarTema(!estaClaro);
        localStorage.setItem(claveTema, nuevoTema);
    });
}
