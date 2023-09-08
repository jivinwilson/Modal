const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');

// Open the modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the overlay is clicked
window.addEventListener('click', () => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
