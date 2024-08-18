$(document).ready(function() {
    const quotes = {
        "Сократ": "Я знаю, що нічого не знаю.",
        "Платон": "Початок є найважливішою частиною будь-якої роботи.",
        "Фрідріх Ніцше": "Те, що не вбиває нас, робить нас сильнішими."
    };

    $('#vitrina2 .interactive-item').click(function() {
        const philosopher = $(this).text();
        const quote = quotes[philosopher] || 'Цитата недоступна';
        
        $(this).fadeOut(400, function() {
            $(this).text(quote).fadeIn(400);
        });
    });

    const modal = $('#add-book-modal');
    const closeModal = $('.close-button');
    const addItemButton = $('#add-item-button');
    const submitBook = $('#submit-book');

    addItemButton.click(function() {
        modal.show();
    });

    closeModal.click(function() {
        modal.hide();
    });

    submitBook.click(function() {
        const bookTitle = $('#book-title').val().trim();
        if (bookTitle) {
            const newItem = $('<div class="item"></div>').text(bookTitle);
            $('#vitrina3 .items').append(newItem);
            modal.hide();
            $('#book-title').val(''); 
        } else {
            alert('Будь ласка, введіть назву книги.');
        }
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });
});
