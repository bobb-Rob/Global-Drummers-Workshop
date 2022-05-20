const drummers = [
  {
    name: 'Billy Cobham',
    bio: 'Billy Cobham is an important figure in the development of the modern drum set.',
    contentBio: 'He was one of the first drummers to mount the china cymbal “upside down”. ',
    image: ['./assets/images/Billy-Cobham.jpg'],
    id: 1,
  },
  {
    name: 'Tony Royster Jnr',
    bio: 'Tony Royster Jr. won the 1995 Guitar Center Drum-Off Competition'
        + 'when he was just 11 years old.',
    contentBio: 'When he was young, his drumming heroes were two of the greatest fusion drummers in history: Billy Cobham and Dennis Chambers.',
    image: ['./assets/images/Tony Royster Jnr.jpg', './assets/images/T.png'],
    id: 2,
  },
  {
    name: 'Anika Niles',
    bio: 'Anika Nilles became a YouTube sensation when she released her first video'
      + '“Alter Ego.”',
    contentBio: ' She started drumming when she was six years old and has since studied with master educators like Claus Hessler and Jost Nickel.',
    image: ['./assets/images/Anika-Nilles.jpg'],
    id: 3,
  },
  {
    name: 'Will Calhoun',
    bio: 'Will Calhoun is a drummer from New York known for being a '
       + 'member of the band Living Colour.',
    contentBio: 'He has performed with Wayne Shorter, Jaco Pastorius, Marcus Miller, Mos Def, B.B. King, Paul Simon, Public Enemy, and Run-DMC. ',
    image: ['./assets/images/Calhoun_Will-.jpg'],
    id: 4,
  },
  {
    name: 'John Blackwell Jr.',
    bio: 'Blackwell began learning the drums when he was three years old from his'
     + ' father.',
    contentBio: 'By the time he was 17, he was performing professionally.',
    image: ['./assets/images/john-blackell.jpg'],
    id: 5,
  },
  {
    name: 'Matt Cameron',
    bio: 'Cameron began performing professionally in San Diego when he was 14 years old',
    contentBio: 'Matt Cameron is best known for his work with Soundgarden and Pearl Jam.',
    image: ['./assets/images/Matt-Cameron.jpg'],
    id: 6,

  },

];

const pastEventImages = [
  {
    image: '../assets/images/Chris “Daddy” Dave.jpg',
    location: 'Global drum festival in Amsterdam',
    year: '2020',
    id: 1,
  },
  {
    image: '../assets/images/Billy-Cobham.jpg',
    location: 'Global drum festival in Amsterdam',
    year: '2021',
    id: 2,
  },
];

// All DOM element created here
const DOM = (() => {
  function createElement(elem, className = null) {
    const element = document.createElement(elem);
    if (className !== null) {
      element.classList.add(className);
    }
    return element;
  }

  const createCloseIcon = (location, closeWrap) => {
    const closeIcon = createElement('img', 'close-icon');
    const closeWrapper = createElement(closeWrap, 'close-icon-wrapper');
    closeIcon.src = '../assets/icons/close-icon.png';
    closeIcon.alt = 'close icon';
    closeWrapper.appendChild(closeIcon);
    location.appendChild(closeWrapper);
  };

  function createCard({
    name, image, bio, id, contentBio,
  }) {
    const performingArtists = document.querySelector('.performing-artists');
    const artistCard = createElement('li', 'artist-card');
    artistCard.id = id;

    // Artist Image div
    const artistImageHolder = createElement('div', 'artist-image');
    const img = createElement('img');
    const [image1] = image;
    img.src = `${image1}`;
    img.classList.add(`image-${id}`);
    img.alt = name;
    artistImageHolder.appendChild(img);

    // artist Bio
    const artistBioHolder = createElement('div', 'artist-bio');
    const artistName = createElement('h4');
    artistName.innerText = name;
    const artistBio = createElement('p', 'brief-bio');
    artistBio.innerText = bio;
    const thinLine = createElement('div', 'thin-line');
    const artistBio2 = createElement('p', 'artist-bio-2');
    artistBio2.innerText = contentBio;
    artistBioHolder.append(artistName, artistBio, thinLine, artistBio2);

    artistCard.append(artistImageHolder, artistBioHolder);
    if (performingArtists) {
      performingArtists.appendChild(artistCard);
    }
  }

  // Featuring Artist Section dynamically injected
  function showCard() {
    drummers.map((drummer) => createCard(drummer));
  }
  showCard(); // Call this function when all element in the dom has been loaded.

  function toggleCard() {
    const allCards = document.querySelectorAll('.artist-card');
    const moreBtn = document.querySelector('.more-btn');

    allCards.forEach((card, index) => {
      if (index > 1) {
        if (card.style.display === 'none') {
          card.style.display = 'grid';
          moreBtn.innerHTML = `<span>Show Less</span>
                    <i class="fa-solid fa-chevron-up"></i>`;
        } else {
          card.style.display = 'none';
          moreBtn.innerHTML = `<span>Show more</span>
                    <i class="fa-solid fa-chevron-down"></i>`;
        }
      }
    });
  }

  const mediaQueryMobile = window.matchMedia('(max-width: 768px)');
  if (mediaQueryMobile.matches) {
    toggleCard();
  }
  // Featuring Artist ends here.

  // About page past event image card
  function createPastEventImage({ year, location, image }) {
    const courosalImageCard = createElement('div', 'courosal-image-card');

    const overlaySlide = createElement('div', 'courosal-image-fade');
    const label1 = createElement('h3');
    label1.innerText = year;
    const label2 = createElement('p');
    label2.innerText = location;
    overlaySlide.append(label1, label2);

    const imageEL = createElement('img');
    imageEL.src = image;
    imageEL.alt = location;

    courosalImageCard.append(overlaySlide, imageEL);
    const container = document.querySelector('.past-image-courosal');
    if (container) {
      container.appendChild(courosalImageCard);
    }
  }

  function showImages() {
    pastEventImages.map((album) => createPastEventImage(album));
  }
  showImages();

  return {
    createElement, createCloseIcon, createCard, toggleCard,
  };
})();

function events(IIFE) {
  const eventsFunc = (() => {
    function addCloseEventMenu(obj) {
      const closeIcon = document.querySelector('.close-icon-wrapper');
      closeIcon.addEventListener('click', () => {
        obj.style.width = '0%';
        closeIcon.remove();
      });
    }

    function displayMenu() {
      const navlinksWrapper = document.querySelector('.navlinks-wrapper');
      IIFE.createCloseIcon(navlinksWrapper, 'div');
      navlinksWrapper.style.width = '100%';
      addCloseEventMenu(navlinksWrapper);
    }

    return { displayMenu };
  })();

  // Menu button listen for click Event
  const hamburger = document.querySelector('.hamburger-btn');
  hamburger.addEventListener('click', eventsFunc.displayMenu);

  // Menu links listen for click events
  const links = document.querySelectorAll('.navlinks-wrapper li');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const closeIcon = document.querySelector('.close-icon-wrapper');
      link.parentElement.style.width = '0%'; // Close the menu
      closeIcon.remove();
    });
  });

  // More Button card toggle event
  const moreBtn = document.querySelector('.more-btn');
  if (moreBtn) {
    moreBtn.addEventListener('click', DOM.toggleCard);
  }
}

events(DOM);
