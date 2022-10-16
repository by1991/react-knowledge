const images = document.querySelectorAll('img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const image = entry.target;
            const data_src = image.getAttribute('data-src');
            image.setAttribute('src', data_src);
            observer.unobserve(image);
        }
    });
});

images.forEach(image => {
    observer.observe(image);
})