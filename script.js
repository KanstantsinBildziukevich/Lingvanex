const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(button => {
    button.addEventListener('change', () => {
        const value = button.value;
        const slides = document.querySelectorAll('.item');
        slides.forEach((slide, index) => {
            slide.classList.toggle('disabled', index !== parseInt(value) - 1);
        });
    });
});