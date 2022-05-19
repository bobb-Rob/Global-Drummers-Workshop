// ALl DOM element created here
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

    return { createElement, createCloseIcon }
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

}

events(DOM);

