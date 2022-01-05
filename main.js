// menu-toggle button

const openMenu = document.querySelector('.menu-btn');
const closeMenu = document.querySelector('.close-btn');
const navBar = document.querySelector('nav');

openMenu.addEventListener('click', () => {
  navBar.style.left = '0px';
});

closeMenu.addEventListener('click', () => {
  navBar.style.left = '-100000px';
});

const artistProfile = [
  {
    names: 'Bruce Melody',
    profile: '/images/Bruce.jpg',
    genre: 'R&B and pop',
    label: 'Igitangaza music records',
    recentWork: '10 years in music festival',
  },
  {
    names: 'B-Threy',
    profile: '/images/B-threy.jpg',
    genre: 'Drill and trap',
    label: 'Ratio music records',
    recentWork: 'Umuuheto EP',
  },
  {
    names: 'Ariel Ways',
    profile: '/images/Ariel.jpg',
    genre: 'R&B and pop',
    label: ' Sympony band group',
    recentWork: 'Love and lust EP',
  },
  {
    names: 'Ish-kevin',
    profile: '/images/Ish.jpg',
    genre: 'Drill',
    label: 'Loud sound music records',
    recentWork: 'organised trapish concert',
  },
  {
    names: 'Juno Kizigenza',
    profile: '/images/Juno.jpg',
    genre: 'Afro-fusion and R&B',
    label: 'Igitangaza music records',
    recentWork: '6Kg EP',
  },
  {
    names: 'Platini P',
    profile: '/images/Platini.jpg',
    genre: 'Afro and R&B',
    label: 'one percent music records',
    recentWork: 'nominated in Afrima awards 2021',
  },

];
// Featured artists section
const artistSection = document.createElement('section');
artistSection.setAttribute('id', 'artists');
artistSection.innerHTML += `<div class="container-fluid artists py-4">
<h3 class="underline-small">Featured artists</h3>
  <div class="container p-0 ">
      <div class="row  d-flex">
          <div class="col-sm-3 col-lg-6 d-flex py-4">
              <div class="container w-50 h-75 p-0"><img src="/images/Bruce.jpg" alt="photo of bruce melody" class="artist"></div>
              <div class="container p-0 artist-description">
                  <h4>${artistProfile[0].names}</h4>
                  <i class="underline-small2">Itahiwacu Bruce, who owns ${artistProfile[0].label}.
                  </i>
                  <p class="py-3 m-0">The ${artistProfile[0].genre} singer who has won many awards including
                      Kiss summer awards 2021, the choice award 2021, HipHop awards 2019 and others. He has recently organised ${artistProfile[0].recentWork} </p>
              </div>
          </div>
          
          <div class="col-sm-3 col-lg-6 d-flex py-4">
              <div class="container w-50 h-75 p-0"><img src="${artistProfile[1].profile}" alt="photo of B-threy" class="artist"></div>
              <div class="container p-0 artist-description">
                  <h4>${artistProfile[1].names}</h4>
                  <i class="underline-small2">Kinya-trap artist who is well known in ${artistProfile[1].label} .
                  </i>
                  <p class="py-3 m-0">The ${artistProfile[1].genre} rapper  who is this upcomming generation of trap gang crew
                      He is well known in trap music. He has recently dropped ${artistProfile[1].recentWork} </p>
              </div>
          </div>
          <div class="more-text ">
          <div class="col-sm-3 col-lg-6 d-flex py-4">
              <div class="container w-50 h-75 p-0"><img src="${artistProfile[2].profile} " alt="Ariel ways" class="artist"></div>
              <div class="container p-0 artist-description">
                  <h4> ${artistProfile[2].names} </h4>
                  <i class="underline-small2"> female singer who has taken leap from ${artistProfile[2].label} .
                  </i>
                  <p class="py-3 m-0">The ${artistProfile[2].genre} singer who is also in this bomming generation of young artists.
                      She is well known in R&B love songs.Recently dropped ${artistProfile[2].recentWork}  and it is trending.</p>
              </div>
          </div>
          <div class="col-sm-3 col-lg-6 d-flex py-4">
              <div class="container w-50 h-75 p-0"><img src=" ${artistProfile[3].profile} " alt="Ish-kevin" class="artist"></div>
              <div class="container p-0 artist-description">
                  <h4>${artistProfile[3].names} </h4>
                  <i class="underline-small2">The Dril king  who is well known in ${artistProfile[3].label}.
                  </i>
                  <p class="py-3 m-0"> The ${artistProfile[3].genre} king artist who is taking the hearts of Rwandan youth with his fast rhymes.
                      He has recently ${artistProfile[3].recentWork}.</p>
              </div>
          </div>
          <div class="col-sm-3 col-lg-6 d-flex py-5">
              <div class="container w-50 h-75 p-0"><img src="${artistProfile[4].profile}" alt="photo of Juno Kizigenza" class="artist"></div>
              <div class="container p-0 artist-description">
                  <h4> ${artistProfile[4].names} </h4>
                  <i class="underline-small2">Juno Kizigenza is an upcomming artist who recently left ${artistProfile[4].label} to do music on his own.
                  </i>
                  <p class="py-3 m-0">The ${artistProfile[4].genre} singer who is also in this upcomming genereation with more creativity in video clips. 
                      He has recently dropped ${artistProfile[4].recentWork} </p>
              </div>
          </div>
          <div class="col-sm-3 col-lg-6 d-flex py-4">
              <div class="container w-50 h-75 p-0"><img src="${artistProfile[5].profile}" alt="photo of Platini P" class="artist"></div>
              <div class="container p-0 artist-description">
                  <h4>${artistProfile[5].names}</h4>
                  <i class="underline-small2">Platini P who is now working solo in partnership with ${artistProfile[5].label} which is in Nigeria. 
                  </i>
                  <p class="py-3 m-0">The ${artistProfile[5].genre} singer has been in singing group called dream boys but now working alone. Platini
                   has much experience in music industry and he has recently been ${artistProfile[5].recentWork}.</p>
              </div>
          </div>
      </div>
          <div class="container d-flex justify-content-center d-lg-none">
              <button class="btn btn-outline-secondary btn-more w-100" >MORE <img src="/images/angle-down-solid.svg" alt=" "></button>
          </div>
      
      </div>
  </div>
</div>`;
document.querySelector('main').appendChild(artistSection);

// show more or less button
const moreButton = document.querySelector('.btn-more');
const moreArtists = document.querySelector('.more-text');
moreButton.addEventListener('click', () => {
  moreArtists.classList.toggle('show');
  if (moreButton.innerHTML === 'MORE <img src="/images/angle-down-solid.svg" alt=" ">') {
    moreButton.innerHTML = 'LESS <img src="/images/angle-up-solid.svg" alt=" ">';
  } else {
    moreButton.innerHTML = 'MORE <img src="/images/angle-down-solid.svg" alt=" ">';
  }
});
