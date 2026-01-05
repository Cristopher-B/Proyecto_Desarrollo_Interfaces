
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


function mostrarAviso(mensaje, tipo = 'info') {
    alert(mensaje); 
}

function actualizarEstadoLogin() {
    const usuarioActivo = obtenerUsuarioActivo();
    const loginLogoutLink = document.getElementById("loginLogoutLink");

    if (loginLogoutLink) {
        if (usuarioActivo) {
            loginLogoutLink.textContent = "Cerrar sesión";
            loginLogoutLink.setAttribute("onclick", "cerrarSesion()");
        } else {
            loginLogoutLink.textContent = "Iniciar Sesión";
            loginLogoutLink.setAttribute("onclick", "window.location.href='login.html'");
        }
    }
}

function cerrarSesion() {
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
        localStorage.removeItem("usuarioActivo");
        window.location.href = "index.html";
    }
}
const paginasPublicas = ["login.html", "registro.html", "index.html", ""];
const ruta = window.location.pathname.split("/").pop();

if (!paginasPublicas.includes(ruta)) {
    if (!obtenerUsuarioActivo()) {
        window.location.href = "login.html";
    }
}

function validarCorreo(correo) {
    return /^[^\s@]+@[^\s@]+\.com$/.test(correo);
}

function validarContrasena(pass) {
    return /[A-Z]/.test(pass) && /[0-9]/.test(pass) && pass.length >= 5;
}

function registrarUsuario(event) {
    event.preventDefault();

    const usuario = document.getElementById("username").value.trim();
    const correo  = document.getElementById("email").value.trim();
    const pass    = document.getElementById("password").value.trim();
    const pass2   = document.getElementById("confirm-password").value.trim();

    let usuarios = obtenerUsuarios();

    if (usuarios.some(u => u[0] === usuario)) {
        mostrarAviso("El nombre de usuario ya existe");
        return;
    }

    if (!validarCorreo(correo)) {
        mostrarAviso("Correo inválido (debe terminar en .com)");
        return;
    }

    if (!validarContrasena(pass)) {
        mostrarAviso("La contraseña debe tener mayúscula, número y mínimo 5 caracteres");
        return;
    }

    if (pass !== pass2) {
        mostrarAviso("Las contraseñas no coinciden");
        return;
    }

    usuarios.push([usuario, correo, pass]);
    guardarUsuarios(usuarios);

    mostrarAviso("¡Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
}

function iniciarSesion(event) {
    event.preventDefault();

    const usuario = document.getElementById("username").value.trim();
    const pass    = document.getElementById("password").value.trim();

    const usuarios = obtenerUsuarios();
    const encontrado = usuarios.find(u => u[0] === usuario && u[2] === pass);

    if (!encontrado) {
        mostrarAviso("Usuario o contraseña incorrectos");
        return;
    }

    guardarUsuarioActivo(usuario);
    window.location.href = "index.html";
}

const cuerpo = document.body;
const claseModoClaro = 'light-mode';
const claveTema = 'preferenciaTema';

function aplicarTema(esClaro) {
    const botonesTema = document.querySelectorAll('#theme-toggle'); 
    
    if (esClaro) {
        cuerpo.classList.add(claseModoClaro);
        botonesTema.forEach(btn => {
            if(btn.classList.contains('sidebar-btn')) {
                btn.innerHTML = '<i class="fa-solid fa-sun"></i> Claro';
            } else {
                btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            }
        });
    } else {
        cuerpo.classList.remove(claseModoClaro);
        botonesTema.forEach(btn => {
            if(btn.classList.contains('sidebar-btn')) {
                btn.innerHTML = '<i class="fa-solid fa-moon"></i> Oscuro';
            } else {
                btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarEstadoLogin();


    const preferencia = localStorage.getItem(claveTema);
    aplicarTema(preferencia === 'light');

    const botonesTema = document.querySelectorAll('#theme-toggle');
    botonesTema.forEach(btn => {
        btn.addEventListener('click', () => {
            const estaClaro = cuerpo.classList.contains(claseModoClaro);
            const nuevoTema = estaClaro ? 'dark' : 'light';
            aplicarTema(!estaClaro);
            localStorage.setItem(claveTema, nuevoTema);
        });
    });
});