
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

// --- 1. BARRA DE BÚSQUEDA ---
document.addEventListener("input", (e) => {
    if (e.target.matches("header input")) {
        const busqueda = e.target.value.toLowerCase();
        const tarjetas = document.querySelectorAll(".card, .juego, .noticia-corta");

        tarjetas.forEach(tarjeta => {
            const texto = tarjeta.textContent.toLowerCase();
            const contenedorCol = tarjeta.closest(".col");
            if (texto.includes(busqueda)) {
                tarjeta.style.display = "block";
                if (contenedorCol) contenedorCol.style.display = "block";
            } else {
                tarjeta.style.display = "none";
                if (contenedorCol) contenedorCol.style.display = "none";
            }
        });
    }
});

// --- 2. VENTANAS FLOTANTES (TOASTS) ---
function mostrarToast(mensaje) {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.style.cssText = "position: fixed; bottom: 20px; right: 20px; z-index: 9999;";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.textContent = mensaje;
    toast.style.cssText = `
        background: #3c2e2e;
        color: #ff4d00;
        padding: 15px 25px;
        border-radius: 8px;
        margin-top: 10px;
        border-left: 5px solid #ff4d00;
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        animation: slideIn 0.5s ease forwards;
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "slideOut 0.5s ease forwards";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// --- 3. SISTEMA DE RESEÑAS ---
function inicializarReseñas() {
    const items = document.querySelectorAll(".game-item");
    
    items.forEach(item => {
        const infoDiv = item.querySelector(".flex-grow-1");
        
        if (infoDiv && !infoDiv.querySelector(".estrellas-rating")) {
            const estrellasContainer = document.createElement("div");
            estrellasContainer.className = "estrellas-rating mt-2";
            estrellasContainer.innerHTML = `
                <i class="far fa-star" data-value="1" style="cursor:pointer; font-size: 1.2rem;"></i>
                <i class="far fa-star" data-value="2" style="cursor:pointer; font-size: 1.2rem;"></i>
                <i class="far fa-star" data-value="3" style="cursor:pointer; font-size: 1.2rem;"></i>
                <i class="far fa-star" data-value="4" style="cursor:pointer; font-size: 1.2rem;"></i>
                <i class="far fa-star" data-value="5" style="cursor:pointer; font-size: 1.2rem;"></i>
            `;
            infoDiv.appendChild(estrellasContainer);
        }
    });
}

document.addEventListener("click", (e) => {
    if (e.target.matches(".estrellas-rating i")) {
        const valor = parseInt(e.target.dataset.value);
        const contenedor = e.target.parentElement;
        const estrellas = contenedor.querySelectorAll("i");
        
        estrellas.forEach(s => {
            const sValue = parseInt(s.dataset.value);
            if (sValue <= valor) {
                s.classList.remove("far");
                s.classList.add("fas", "text-warning");
            } else {
                s.classList.remove("fas", "text-warning");
                s.classList.add("far");
            }
        });
        if (typeof mostrarToast === 'function') {
            mostrarToast(`Calificaste este juego con ${valor} estrellas`);
        }
    }
});

// IMPORTANTE: Ejecutar la función al cargar la página
window.addEventListener("load", () => {
    inicializarReseñas();
});