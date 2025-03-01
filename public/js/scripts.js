document.addEventListener("DOMContentLoaded", function () {
    const mensajes = document.querySelectorAll(".alert");
    mensajes.forEach(mensaje => {
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 3000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Capturar el evento de clic en los botones de edición
    document.querySelectorAll(".btn-editar").forEach(boton => {
        boton.addEventListener("click", async function () {
            const id = this.getAttribute("data-id");

            try {
                // Obtener los datos del dispositivo desde la API
                const respuesta = await fetch(`/dispositivos/${id}`);
                const dispositivo = await respuesta.json();

                // Rellenar el modal con los datos obtenidos
                document.getElementById("edit-id").value = dispositivo._id;
                document.getElementById("edit-marca").value = dispositivo.marca;
                document.getElementById("edit-modelo").value = dispositivo.modelo;
                document.getElementById("edit-precio").value = dispositivo.precio;
                document.getElementById("edit-descripcion").value = dispositivo.descripcion || "";

                // Ajustar la acción del formulario para enviar la actualización correctamente
                document.getElementById("formEditar").action = `/dispositivos/${id}?_method=PUT`;
            } catch (error) {
                console.error("❌ Error al obtener los datos del dispositivo:", error);
            }
        });
    });
});

