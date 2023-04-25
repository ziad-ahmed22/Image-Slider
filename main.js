let pagenation = document.querySelector('.bullets');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let imgs = Array.from(document.images);
let imgsLength = imgs.length;
let currentSlide = 1;

// Create Pagenation Bullets
for(let i = 0; i < imgsLength; i++) {
    let span = document.createElement('span');
    span.appendChild(document.createTextNode(i + 1));
    span.setAttribute('data-num', i + 1);
    pagenation.appendChild(span);
}

// Add And Remove Active Bullets
let pagenationSpans = document.querySelectorAll('.bullets span');

pagenationSpans.forEach(span => {
    span.addEventListener('click', (e) => {

        pagenationSpans.forEach(span => {
            span.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        
        currentSlide = e.currentTarget.dataset.num;
        showImg();
    });
})

prevBtn.addEventListener('click', prevFun);
nextBtn.addEventListener('click', nextFun);

setInterval(() => {
    currentSlide >= imgsLength ? currentSlide = 1 : currentSlide++;;
    showImg();
}, 3000);

showImg();

function showImg() {
    document.querySelector('.slide-num').textContent = `Slide ${currentSlide} of ${imgsLength}`;
    activeImgs();
    activeBullets();
    currentSlide <= 1 ? prevBtn.classList.add('disabled') : prevBtn.classList.remove('disabled');
    currentSlide >= imgsLength ? nextBtn.classList.add('disabled') : nextBtn.classList.remove('disabled');
}
function activeImgs() {
    imgs.forEach(img => {
        img.classList.remove('active');
    });
    imgs[currentSlide - 1].classList.add('active');
}
function activeBullets() {
    pagenationSpans.forEach(span => {
        span.classList.remove('active');
    });
    pagenationSpans[currentSlide - 1].classList.add('active');
}
function prevFun() {
    currentSlide > 1 ? currentSlide-- : "";
    showImg();
}
function nextFun() {
    currentSlide < imgsLength ? currentSlide++ : "";
    showImg();
}