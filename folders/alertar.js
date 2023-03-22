let button = document.getElementById("click");
button.addEventListener("click", () => {
    Swal.fire({
            title: "Genial!",
            text: "Haz agregado una Tarea",
        });
})