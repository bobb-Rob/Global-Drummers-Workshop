const drummers = [
    {
     name: 'Tony Royster Jnr',
     bio: 'Tony Royster Jr. won the 1995 Guitar Center Drum-Off Competition' + 
        'when he was just 11 years old.',
     image: ['../assets/images/Tony Royster Jnr.jpg'],
    },
    {
     name: 'Anika Niles',
     bio: 'Anika Nilles became a YouTube sensation when she released her first video' +
      '“Alter Ego.”',
     image: ['../assets/images/Anika Nilles.jpg'],
    },
    {
     name: 'Will Calhoun',
     bio: 'Will Calhoun is an accomplished drummer from New York known for being a' +
       'member of the band Living Colour.',
     image: ['../assets/images/Calhoun_Will-.jpg'],
    },
    {
     name: 'John Blackwell Jr.',
     bio: 'Blackwell began learning the drums when he was three years old from his' +
     'father. By the time he was 17, he was performing professionally.',
     image: ['../assets/images/john-blackell.jpg'],
    },
    {
     name: 'Larnell Lewis',
     bio: 'Having played the drums since he was two years old, Larnell Lewis has risen' + 
     'to become one of the most notable names in modern drumming.',
     image: ['../assets/images/Larnell Lewis-jp.jpg'],
    },
    {
     name: 'Brian Blade',
     bio: 'Brian Blade is one of the most accomplished contemporary jazz drummers of' +
     'the past 20 years.',
     image: ['../assets/images/Brian Blade.jpg'],
    },
    {
     name: 'Brian Blade',
     bio: 'Brian Blade is one of the most accomplished contemporary jazz drummers of' +
     'the past 20 years.',
     image: ['../assets/images/Brian Blade.jpg'],
    },
];

const pastEventImages = [
    {
     image: '../assets/images/Chris “Daddy” Dave.jpg',
     location: 'Global drum festival in Amsterdam',
     year: '2020',
    },
    {
     image: '../assets/images/Chris “Daddy” Dave.jpg',
     location: 'Global drum festival in Amsterdam',
     year: '2020',
    },
    {
     image: '../assets/images/Chris “Daddy” Dave.jpg',
     location: 'Global drum festival in Amsterdam',
     year: '2020',
    },
    {
     image: '../assets/images/Chris “Daddy” Dave.jpg',
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
    };

    const createCloseIcon = (location, closeWrap) => {
        const closeIcon = createElement('img', 'close-icon');
        const closeWrapper = createElement(closeWrap, 'close-icon-wrapper');
        closeIcon.src = '../assets/icons/close-icon.png';
        closeIcon.alt = 'close icon';
        closeWrapper.appendChild(closeIcon);
        location.appendChild(closeWrapper);
    };

    function createOverlay(){
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
    
        return overlay;
    }


    function createCard(artist) {
        const performingArtists = document.querySelector('.performing-artists');
        const artistCard = createElement('li', 'artist-card');

        // Artist Image div
        const artistImageHolder = createElement("div", "artist-image");
        const img = createElement('img');
        img.src = artist.image[0];
        img.alt = artist.name;
        artistImageHolder.appendChild(img);

        // artist Bio
        const artistBioHolder = createElement("div", 'artist-bio');
        const artistName = createElement('h4');
        artistName.innerText = artist.name; 
        const artistBio = createElement('p', 'brief-bio');
        artistBio.innerText = artist.bio;
        artistBioHolder.append(artistName, artistBio);

        artistCard.append(artistImageHolder, artistBioHolder);
        if(performingArtists){
            performingArtists.appendChild(artistCard);
        }
       
    }

    // Featuring Artist Section dynamically injected
    function showCard() {
        drummers.map(drummer => createCard(drummer));
    }
    showCard(); //Call this function when all element in the dom has been loaded.

    function toggleCard(){
        const allCards = document.querySelectorAll('.artist-card');
        const moreBtn = document.querySelector('.more-btn');      
              
        allCards.forEach((card, index) => {
            if(index > 1) {
                if(card.style.display === 'none') {
                    card.style.display = 'flex';
                    moreBtn.innerHTML = `<span>Show Less</span>
                    <i class="fa-solid fa-chevron-up"></i>`;                   
                }else {
                    card.style.display = 'none';
                    moreBtn.innerHTML = `<span>Show more</span>
                    <i class="fa-solid fa-chevron-down"></i>`;                  
                };
            };
        });
    };

    const mediaQueryMobile = window.matchMedia('(max-width: 768px)'); 

    if(mediaQueryMobile.matches){
        toggleCard();
    };
    // Featuring Artist ends here.
  
    // About page past event image card
    function createPastEventImage(album) {
        const courosalImageCard = createElement('div', 'courosal-image-card');

        const overlaySlide = createElement('div', 'courosal-image-fade');
        const label1 = createElement('h3');
        label1.innerText = album.year;
        const label2 = createElement('p');
        label2.innerText = album.location;
        overlaySlide.append(label1, label2);

        const image = createElement('img');
        image.src = album.image;
        image.alt = album.location;

        courosalImageCard.append(overlaySlide, image);
        const container = document.querySelector('.past-image-courosal');
        if(container){
            container.appendChild(courosalImageCard);
        }       
    }

    function showImages() {
        pastEventImages.map(album => createPastEventImage(album));
    };
    showImages()




   

    return { createElement, createCloseIcon, createCard, toggleCard }
})();



function events(interface) {

    const eventsFunc = (function (){
        function _addCloseEventMenu(obj){
            const closeIcon = document.querySelector('.close-icon-wrapper');
            closeIcon.addEventListener('click', () => {
                obj.style.width = "0%";
                closeIcon.remove();
            });
        };

        function displayMenu() {
            const navlinksWrapper = document.querySelector('.navlinks-wrapper');
            interface.createCloseIcon(navlinksWrapper, "div");   
            navlinksWrapper.style.width = "100%";
            console.log('hamburger clicked');
            _addCloseEventMenu(navlinksWrapper);
        };      
        
        

        return { displayMenu }
    })()

    // Menu button listen for click Event 
    const hamburger = document.querySelector('.hamburger-btn');
    hamburger.addEventListener('click', eventsFunc.displayMenu);

    // Menu links listen for click events
    const links =  document.querySelectorAll('.navlinks-wrapper li');
        links.forEach(link => {
            link.addEventListener('click', () => {
                const closeIcon = document.querySelector('.close-icon-wrapper');               
                    link.parentElement.style.width = "0%"; //Close the menu
                    closeIcon.remove();
            });
        });

    // More Button card toggle event
    const moreBtn = document.querySelector('.more-btn');
    if(moreBtn){
        moreBtn.addEventListener('click', DOM.toggleCard);
    }
   

}

events(DOM);

