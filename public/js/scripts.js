document.addEventListener("DOMContentLoaded", function () {

    // Oculto los mensajes de alerta después de 3 segundos
    const mensajes = document.querySelectorAll(".alert");
    mensajes.forEach(mensaje => {
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 3000);
    });

    // Manejo el evento de clic en los botones de edición
    document.querySelectorAll(".btn-editar").forEach(boton => {
        boton.addEventListener("click", async function () {
            const id = this.getAttribute("data-id");

            try {
                // Obtengo los datos del dispositivo desde el servidor
                const respuesta = await fetch(`/dispositivos/${id}`);
                const dispositivo = await respuesta.json();

                // Lleno el formulario con los datos obtenidos
                document.getElementById("edit-id").value = dispositivo._id;
                document.getElementById("edit-marca").value = dispositivo.marca;
                document.getElementById("edit-modelo").value = dispositivo.modelo;
                document.getElementById("edit-precio").value = dispositivo.precio;
                document.getElementById("edit-descripcion").value = dispositivo.descripcion || "";

                // Manejo la vista previa de la imagen del dispositivo
                const imagenPreview = document.getElementById("edit-imagen-preview");
                if (dispositivo.imagen) {
                    imagenPreview.src = `/uploads/${dispositivo.imagen}`;
                    imagenPreview.style.display = "block";
                } else {
                    imagenPreview.style.display = "none";
                }

                // Ajusto la acción del formulario para la actualización
                document.getElementById("formEditar").action = `/dispositivos/${id}?_method=PUT`;

            } catch (error) {
                console.error("❌ Error al obtener los datos del dispositivo:", error);
            }
        });
    });

    // Manejo la vista previa de la imagen al seleccionarla en el input
    document.getElementById("edit-imagen").addEventListener("change", function (event) {
        const file = event.target.files[0];
        const imagenPreview = document.getElementById("edit-imagen-preview");

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagenPreview.src = e.target.result;
                imagenPreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    // Manejo el evento de clic en los botones de eliminar
    document.querySelectorAll(".btn-eliminar").forEach(boton => {
        boton.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            document.getElementById("formEliminar").action = `/dispositivos/${id}?_method=DELETE`;
        });
    });

    // Manejo el botón para volver arriba
    document.getElementById("scrollToTop").addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});