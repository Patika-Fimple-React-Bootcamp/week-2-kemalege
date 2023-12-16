const filterInput = document.querySelector('.filter-input');

function filtercardItems() {
    
    filterInput.addEventListener('input', function() {

        const searchTerm = filterInput.value.toLowerCase();

        var cardContainer = document.querySelectorAll('.card-container');

        cardContainer.forEach((cardElement) => {
            
            let shouldShow = false;
                const title = cardElement.querySelector('#title-content');
                const body = cardElement.querySelector('#body-content');
                const bodyText = body.textContent.toLowerCase();
                const titleText = title.textContent.toLowerCase();
                
                if (titleText.includes(searchTerm) || bodyText.toLowerCase().includes(searchTerm)) {
                    shouldShow = true;
                }

            if (shouldShow) {
                cardElement.style.display = 'flex';
            } else {
                cardElement.style.display = 'none';
            }
        });
        
    });
}

filtercardItems()
