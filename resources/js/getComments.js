const handlecardContainerClick = () => {
    cardContainers = document.querySelectorAll('.card-container');

    cardContainers.forEach((container) => {
        container.addEventListener('click', async (event) => {
            if (!event.target.matches('#delete-button')) {
                const postId = container.querySelector('.row:nth-child(1) p:last-child').textContent;
                modal.style.display = 'block';

                try {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                    const comments = response.data;

                    const modalBody = document.querySelector('[data-modal-body]');
                    modalBody.innerHTML = '';
                    
                    comments.forEach((comment) => {
                        modalBody.innerHTML += `
                            <div class="card-container">
                                <div class="card-wrapper">
                                    <div class="content">
                                        <div class="row">
                                            <p>id:</p>
                                            <p>${comment.id}</p>
                                        </div>
                                        <div class="row">
                                            <p>postId:</p>
                                            <p>${comment.postId}</p>
                                        </div>
                                        <div class="row">
                                            <p>name:</p>
                                            <p>${comment.name}</p>
                                        </div>
                                        <div class="row">
                                            <p>email:</p>
                                            <p>${comment.email}</p>
                                        </div>
                                        <div class="row">
                                            <p>body:</p>
                                            <p>${comment.body}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    });

                } catch (error) {
                    console.error(error);
                }
            }
        });
    });
}