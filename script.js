const itemsPerPage = 8;  // Cantidad de fotos por página
let currentPage = 1;

const photos = document.querySelectorAll('.grid-item ');
const totalItems = photos.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

function renderGrid() {
    // Ocultar todas las fotos
    photos.forEach(photo => photo.style.display = 'none');

    // Mostrar solo las fotos correspondientes a la página actual
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    for (let i = start; i < end && i < totalItems; i++) {
        photos[i].style.display = 'block';
    }

    updatePagination();
}

function updatePagination() {
    document.getElementById('pageInfo').textContent = `Página ${currentPage} de ${totalPages}`;
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderGrid();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderGrid();
    }
});

// Inicializar la cuadrícula con la primera página
renderGrid();