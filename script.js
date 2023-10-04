document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.navlist');

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('nav-active');
    });
});

document.querySelector('.hamburger').addEventListener('click', function () {
    const navList = document.querySelector('.navlist');
    const hamburger = document.querySelector('.hamburger');

    navList.classList.toggle('nav-hidden');
    hamburger.classList.toggle('active'); // This will change the hamburger to a cross
});
