// show more or less button
const moreButton = document.querySelector('.btn-more');
const moreArtists = document.querySelector('.more-text');

moreButton. addEventListener('click', (e)=> {
    moreArtists.classList.toggle('show');
    moreButton.style.display = 'none';
})