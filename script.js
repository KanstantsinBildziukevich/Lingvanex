const buttons = document.querySelectorAll('.button_small');

buttons[0].classList.add('active');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});