const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const certificates = document.querySelector('.four-section-certificates');
const configBtn = document.querySelector('.config-icon');
const html = document.getElementById('html');

arrowRight.addEventListener('click', () => {
    certificates.scrollLeft += 600});

arrowLeft.addEventListener('click', () =>{
    certificates.scrollLeft -= 600;
});

configBtn.addEventListener('click', () =>{
    html.classList.toggle('light-theme');
});


