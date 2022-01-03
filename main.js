// show more or less button
const moreButton = document.querySelector('.btn-more');
const moreArtists = document.querySelector('.more-text');

moreButton. addEventListener('click', (e)=> {
    moreArtists.classList.toggle('show');
    if (moreButton.innerHTML === 'MORE <img src="/images/angle-down-solid.svg" alt=" ">') {
        moreButton.innerHTML = 'LESS <img src="/images/angle-up-solid.svg" alt=" ">'
    } else
    {
        moreButton.innerHTML = 'MORE <img src="/images/angle-down-solid.svg" alt=" ">';
    }
})