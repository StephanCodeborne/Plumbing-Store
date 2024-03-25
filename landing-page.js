const headerSearchButton = document.getElementById('search-button');
const phoneSearchButton = document.getElementById('phone-search-button');
const body = document.body;
const searchContainer = document.querySelector('.search-tab-container');
const header = document.getElementById('header');

headerSearchButton.addEventListener('click', () => {
    body.classList.toggle('shaded');
    searchContainer.classList.toggle('active');
});

phoneSearchButton.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    header.classList.toggle('fixed');
});


const catalogButton = document.querySelector('catalog-button')