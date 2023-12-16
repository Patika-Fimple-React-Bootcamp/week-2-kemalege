const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = response.data;

        function addcardItem(item) {
            cardLayout.innerHTML += `
                <div class="card-container">
                    <div class="card-wrapper">
                        <div class="content">
                            <div class="row">
                                <p>id:</p>
                                <p>${item.id}</p>
                            </div>
                            <div class="row">
                                <p>userId:</p>
                                <p>${item.userId}</p>
                            </div>
                            <div class="row">
                                <p>title:</p>
                                <p id="title-content">${item.title}</p>
                            </div>
                            <div class="row">
                                <p>body:</p>
                                <p id="body-content">${item.body}</p>
                            </div>
                        </div>
                        <div class="delete-button-container">
                            <div class="row">
                                <div>
                                    <button id="delete-button">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;    
        }
        data.forEach(addcardItem);

    } catch (error) {
        console.error(error);
    }
}