const likeImageElements = document.querySelectorAll('.js-like-image');

likeImageElements.forEach((likeImageEl) => {
    likeImageEl.addEventListener('click', (event) => {
        const counterEl = event.target.parentElement.querySelector('.js-like-counter');
        const counter = +counterEl.textContent;
        const likeIncrement = 1;

        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            counterEl.textContent = counter - likeIncrement;
        } else {
            event.target.classList.add('active');
            counterEl.textContent = counter + likeIncrement;
        }
    });
});