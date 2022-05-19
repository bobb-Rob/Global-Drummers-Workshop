const drummers = [
  {
    name: 'Tony Royster Jnr',
    bio: 'Tony Royster Jr. won the 1995 Guitar Center Drum-Off Competition'
        + 'when he was just 11 years old.',
    contentBio: `Tony Royster Jr. won the 1995 Guitar Center Drum-Off Competition 
    when he was just 11 years old. When he was young, his drumming heroes were two
    of the greatest fusion drummers in history: Billy Cobham and Dennis Chambers. His
    drumming frequently demonstrates his blazing fast hand and foot speed, as well as
     his incorporation of “gospel chops” and linear patterns. Tony Royster Jr. has
     performed with many of today’s greatest R&B, pop, and hip-hop artists including Katy
    Perry, Mac Miller, Jay-Z, Joe Jonas, AWOLNATION, Residente, Big Sean, and Tori Kelly.`,
    image: ['../assets/images/Tony Royster Jnr.jpg', '../assets/images/T.png'],
  },
  {
    name: 'Anika Niles',
    bio: 'Anika Nilles became a YouTube sensation when she released her first video'
      + '“Alter Ego.”',
    image: ['../assets/images/Anika Nilles.jpg'],
  },
  {
    name: 'Will Calhoun',
    bio: 'Will Calhoun is a drummer from New York known for being a '
       + 'member of the band Living Colour.',
    image: ['../assets/images/Calhoun_Will-.jpg'],
  },
  {
    name: 'John Blackwell Jr.',
    bio: 'Blackwell began learning the drums when he was three years old from his'
     + ' father.',
    image: ['../assets/images/john-blackell.jpg'],
  },
  {
    name: 'Larnell Lewis',
    bio: 'Started playing drums since he was two years old, and he has risen'
     + ' to become a notable names in modern drumming.',
    image: ['../assets/images/Larnell Lewis-jp.jpg'],
  },
  {
    name: 'Brian Blade',
    bio: 'Brian Blade is one of the most accomplished contemporary jazz drummers of'
     + ' the past 20 years.',
    image: ['../assets/images/Brian Blade.jpg'],
  },
  {
    name: 'Matt Garstka',
    bio: `Matt Garstka became the drummer for the progressive metal band Animals as Leaders
     in 2012.`,
    image: ['../assets/images/Matt-Garstka-.jpg'],
  },
  {
    name: 'Matt Cameron',
    bio: 'Cameron began performing professionally in San Diego when he was 14 years old',
    image: ['../assets/images/Matt-Cameron.jpg'],
  },
  {
    name: 'Billy Cobham',
    bio: 'Billy Cobham is an important figure in the development of the modern drum set.',
    image: ['../assets/images/Billy-Cobham.jpg'],
  },
];

const pastEventImages = [
  {
    image: '../assets/images/Chris “Daddy” Dave.jpg',
    location: 'Global drum festival in Amsterdam',
    year: '2020',
  },
  {
    image: '../assets/images/David-Garibaldi.jpg',
    location: 'Global drum festival in Amsterdam',
    year: '2021',
  },
  {
    image: '../assets/images/Billy-Cobham.jpg',
    location: 'Global drum festival in Amsterdam',
    year: '2021',
  },
  {
    image: '../assets/images/Dennis-Chambers.jpg',
    location: 'Global drum festival in Amsterdam',
    year: '2020',
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

  function createCard({ name, image, bio }) {
    const performingArtists = document.querySelector('.performing-artists');
    const artistCard = createElement('li', 'artist-card');

    // Artist Image div
    const artistImageHolder = createElement('div', 'artist-image');
    const img = createElement('img');
    const [image1] = image;
    img.src = image1;
    img.alt = name;
    artistImageHolder.appendChild(img);

    // artist Bio
    const artistBioHolder = createElement('div', 'artist-bio');
    const artistName = createElement('h4');
    artistName.innerText = name;
    const artistBio = createElement('p', 'brief-bio');
    artistBio.innerText = bio;
    artistBioHolder.append(artistName, artistBio);

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
          card.style.display = 'flex';
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
