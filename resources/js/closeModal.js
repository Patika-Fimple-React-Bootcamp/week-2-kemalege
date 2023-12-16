const handleClosemodal = () => {
    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalBody.innerHTML = '';
        }
    });
}
