document.addEventListener("DOMContentLoaded", function () {
    const mensajes = document.querySelectorAll(".alert");
    mensajes.forEach(mensaje => {
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 3000);
    });
});
