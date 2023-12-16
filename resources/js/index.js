const cardLayout = document.getElementById('card-layout');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalBody = document.querySelector('[data-modal-body]');
const cancelBtn = document.getElementById('cancel-btn');
const button = cardLayout.querySelectorAll('#delete-button');


const init = async () => {
    await getPosts();
    handleDeleteButtonClick();
    handlecardContainerClick();
    handleClosemodal()
}

init();