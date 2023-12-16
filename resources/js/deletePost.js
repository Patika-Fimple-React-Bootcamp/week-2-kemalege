const handleDeleteButtonClick = () => {
    var button = cardLayout.querySelectorAll('#delete-button');
    button.forEach(function(button) {
        button.addEventListener('click', function() {
            button.closest('.card-container').remove();
        });
    });
};

