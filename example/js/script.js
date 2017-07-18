
/// -------------------------------------------------------------- SLIDE CONSTRUCTOR

let Slide = function(imageUrl, title, description) {
    this.imageUrl    = imageUrl;
    this.title       = title;
    this.description = description;
}

const slides = [
    new Slide('http://via.placeholder.com/350x150', 'title1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/350x250', 'title2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/450x150', 'title3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
];

const DOMstrings = {
    slideContainer   : 'jslide-slides',
    slideNav         : 'jslide-navigation',
    slideBtnPrev     : 'jslide-btn-prev',
    slideBtnNext     : 'jslide-btn-next',
    slideContent     : '.jslide-slides__slide',
    activeSlideClass : 'jslide-slides__slide--active',
    activeItemClass  : 'jslide-navigation__item--active',
    navigationLinks  : '.jslide-navigation__item a'
}

/// -------------------------------------------------------------- SLIDES

const InteractionController = (function() {

    const activeMatches = document.getElementsByClassName(DOMstrings.activeSlideClass);

    let activeSlide = 0;

    function nodeListForEach(list, callback) {
        for(var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    function hideSlides(list) {
        nodeListForEach(list, function(current){
            current.classList.toggle(DOMstrings.activeSlideClass);
        });
    };

    function updateNavigation() {
        let slideNavigationLinks = document.querySelectorAll(DOMstrings.navigationLinks);

        nodeListForEach(slideNavigationLinks, function(current){
            if (current.id != activeSlide) {
                current.parentElement.classList.remove(DOMstrings.activeItemClass);
            } else {
                current.parentElement.classList.add(DOMstrings.activeItemClass);
            }
        });
    };

    function onlyShowNextButton() {
        document.getElementById(DOMstrings.slideBtnPrev).style.display = 'none';
    };

    function onlyShowPrevButton() {
        document.getElementById(DOMstrings.slideBtnNext).style.display = 'none';
    };

    function showNextAndPrevButton() {
        document.getElementById(DOMstrings.slideBtnPrev).style.display = 'block';
        document.getElementById(DOMstrings.slideBtnNext).style.display = 'block';
    };

    function toggleButtons() {
        if (activeSlide == 0) {
            onlyShowNextButton();
        } else if (activeSlide == (slides.length - 1)) {
            onlyShowPrevButton();
        } else {
            showNextAndPrevButton();
        }
    };

    return {

        onlyShowNextButton: function() {
            onlyShowNextButton();
        },

        showInitialSlide: function() {
            document.querySelector('[data-id="0"]').classList.add(DOMstrings.activeSlideClass);
            document.querySelector(DOMstrings.navigationLinks).parentElement.classList.add(DOMstrings.activeItemClass);
        },

        showSlide: function() {
            hideSlides(activeMatches);
            document.querySelector(`[data-id="${this.id}"]`).classList.add(DOMstrings.activeSlideClass);
            activeSlide = this.id;
            toggleButtons();
            updateNavigation();
        },

        slideLeftRight: function() {
            hideSlides(activeMatches);

            if (this.id === DOMstrings.slideBtnPrev && activeSlide != 0) {
                activeSlide--;
            } else if (this.id === DOMstrings.slideBtnNext && activeSlide != (slides.length - 1)) {
                activeSlide++;
            }

            document.querySelector(`[data-id="${activeSlide}"]`).classList.add(DOMstrings.activeSlideClass);
            toggleButtons();
            updateNavigation();
        },
    };

})();

/// ----------------------------------------------- UI CONTROLLER

const UIController = (function() {

    const navigationTemplate = function(title, id) {
        return `<li class='jslide-navigation__item'><a id='${id}' href="#">${title}</a></li>`; 
    }

    const slideTemplate = function(imageUrl, title, description, id) {
        return `<div class="jslide-slides__slide" data-id='${id}'><img src="${imageUrl}" /><h1>${title}</h1><p>${description}</p></div>`;
    }

    function buildEl(pos, el, fn) {
        document.getElementById(el).insertAdjacentHTML(pos, fn); 
    }

    return {

        buildNavigation: function() {
            for(let i = 0; i < slides.length; i++) {

                const title = slides[i].title;
                const navId = [i];

                buildEl('beforeend', DOMstrings.slideNav, navigationTemplate(title, navId));
            }
        },

        buildSlides: function() {
            for(let i = 0; i < slides.length; i++) {

                const imageUrl = slides[i].imageUrl;
                const title = slides[i].title;
                const description = slides[i].description;
                const slideId = [i];

                buildEl('beforeend', DOMstrings.slideContainer, slideTemplate(imageUrl, title, description, slideId));
            }
        },
    };

})();

/// ----------------------------------------------- APPCONTROLLER

const JSlideController = (function() {

    function addEvents(el, arg, fn) {
        for(let i = 0; i < arg.length; i++) {
            el.addEventListener(arg[i], fn);
        }
    };

    const setUpEventListeners = function() {
        addEvents(document.getElementById(DOMstrings.slideBtnPrev), ['click'], InteractionController.slideLeftRight);
        addEvents(document.getElementById(DOMstrings.slideBtnNext), ['click'], InteractionController.slideLeftRight);
        
        let aTags = document.getElementsByTagName('a');

        for(var i = 0; i < aTags.length; i++) {
            aTags[i].addEventListener('click', InteractionController.showSlide);
        }
    };

    return {
        init: function() {
            UIController.buildNavigation();
            UIController.buildSlides();
            InteractionController.showInitialSlide();
            InteractionController.onlyShowNextButton();
            setUpEventListeners();
        }
    };

})();

JSlideController.init();
