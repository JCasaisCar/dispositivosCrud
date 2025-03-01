document.addEventListener("DOMContentLoaded", function () {
    const mensajes = document.querySelectorAll(".alert");
    mensajes.forEach(mensaje => {
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 3000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-editar").forEach(boton => {
        boton.addEventListener("click", async function () {
            const id = this.getAttribute("data-id");

            try {
                const respuesta = await fetch(`/dispositivos/${id}`);
                const dispositivo = await respuesta.json();

                document.getElementById("edit-id").value = dispositivo._id;
                document.getElementById("edit-marca").value = dispositivo.marca;
                document.getElementById("edit-modelo").value = dispositivo.modelo;
                document.getElementById("edit-precio").value = dispositivo.precio;
                document.getElementById("edit-descripcion").value = dispositivo.descripcion || "";

                // Si tiene imagen, mostrarla en la vista previa
                const imagenPreview = document.getElementById("edit-imagen-preview");
                if (dispositivo.imagen) {
                    imagenPreview.src = `/uploads/${dispositivo.imagen}`;
                    imagenPreview.style.display = "block";
                } else {
                    imagenPreview.style.display = "none";
                }

                // Ajustar la acción del formulario
                document.getElementById("formEditar").action = `/dispositivos/${id}?_method=PUT`;

            } catch (error) {
                console.error("❌ Error al obtener los datos del dispositivo:", error);
            }
        });
    });

    // Vista previa de la nueva imagen seleccionada en el input
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
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-eliminar").forEach(boton => {
        boton.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            document.getElementById("formEliminar").action = `/dispositivos/${id}?_method=DELETE`;
        });
    });
});

