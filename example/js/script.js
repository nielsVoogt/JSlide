
/// -------------------------------------------------------------- SLIDE CONSTRUCTOR

let Slide = function(imageUrl, title, description) {
    this.imageUrl    = imageUrl;
    this.title       = title;
    this.description = description;
}

/// -------------------------------------------------------------- SLIDES

const slides = [
    new Slide('http://via.placeholder.com/350x150', 'title1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/350x250', 'title2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/450x150', 'title3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/350x150', 'title4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/350x250', 'title5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/450x150', 'title6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/350x150', 'title7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/350x250', 'title8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),
    new Slide('http://via.placeholder.com/450x150', 'title9', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eu velit egestas pretium id at diam. In non nibh vitae est fringilla dapibus ac id libero. Aliquam erat volutpat. Nulla pretium, lectus at maximus pellentesque, odio nisi scelerisque arcu, a accumsan est arcu non ipsum. Nulla nibh erat, porta non nisl a, imperdiet lacinia sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac enim lectus. Morbi vel lobortis ligula. Nullam lacinia massa rutrum, imperdiet erat id, placerat felis. Nullam in ipsum eget nibh pharetra feugiat. Etiam quis ante volutpat, aliquam elit ut, molestie libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.')
];

/// -------------------------------------------------------------- DOMSTRINGS

const DOMArray = (function() {
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

    return {
        getDomStrings: function() {
            return DOMstrings;
        },
    };
})();

/// -------------------------------------------------------------- SLIDES

const InteractionController = (function() {

    const DOM = DOMArray.getDomStrings;
    const activeMatches = document.getElementsByClassName(DOM().activeSlideClass);

    let activeSlide = 0;

    /// ----------------- nodeListForEach HELPER

    function nodeListForEach(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    /// ----------------- HIDE ALL THE THINGS!

    function hideOtherSlides(str) {
        nodeListForEach(str, function(curr){
            curr.classList.toggle(DOM().activeSlideClass);
        });
    };

    /// ----------------- UPDATENAVIGATION

    function updateNavigation() {
        let slideNavigationLinks = document.querySelectorAll(DOM().navigationLinks);

        nodeListForEach(slideNavigationLinks, function(curr){
            if (curr.id != activeSlide) {
                curr.parentElement.classList.remove(DOM().activeItemClass);
            } else {
                curr.parentElement.classList.add(DOM().activeItemClass);
            }
        });
    };

    /// ----------------- SHOW/HIDE BUTTONS

    function hideButton(btn) {
        document.getElementById(btn).style.display = 'none';
    };

    function showButton(btn) {
        document.getElementById(btn).style.display = 'block';
    };

    function toggleButtons() {
        if (activeSlide == 0) {
            hideButton(DOM().slideBtnPrev);
            showButton(DOM().slideBtnNext);
        } else if (activeSlide == (slides.length - 1)) {
            hideButton(DOM().slideBtnNext);
            showButton(DOM().slideBtnPrev);
        } else {
            showButton(DOM().slideBtnPrev);
            showButton(DOM().slideBtnNext);
        }
    };

    return {

        hidePrevBtn: function() {
            hideButton(DOM().slideBtnPrev);
        },

        showInitialSlide: function() {
            document.querySelector('[data-id="0"]').classList.add(DOM().activeSlideClass);
            document.querySelector(DOM().navigationLinks).parentElement.classList.add(DOM().activeItemClass);
        },

        showSlide: function() {
            hideOtherSlides(activeMatches);
            document.querySelector(`[data-id="${this.id}"]`).classList.add(DOM().activeSlideClass);
            activeSlide = this.id;
            toggleButtons();
            updateNavigation();
        },

        slideLeftRight: function() {
            hideOtherSlides(activeMatches);

            if (this.id === DOM().slideBtnPrev && activeSlide != 0) {
                activeSlide--;
            } else if (this.id === DOM().slideBtnNext && activeSlide != (slides.length - 1)) {
                activeSlide++;
            }

            document.querySelector(`[data-id="${activeSlide}"]`).classList.add(DOM().activeSlideClass);

            toggleButtons();
            updateNavigation();
        },
    };

})();

/// ----------------------------------------------- UI CONTROLLER

const UIController = (function() {

    const DOM = DOMArray.getDomStrings;

    /// ----------------- TEMPLATES

    const navigationTemplate = function(title, id) {
        return `<li class='jslide-navigation__item'>
                    <a id='${id}' href="#" >
                        ${title}
                    </a>
                </li>`; 
    }

    const slideTemplate = function(imageUrl, title, description, id) {
        return `<div class="jslide-slides__slide" data-id='${id}'>
                    <img src="${imageUrl}" />
                    <h1>${title}</h1>
                    <p>${description}</p>
                </div>`;
    }

    /// ----------------- BUILD HELPER

    function buildEl(pos, el, fn) {
        document.getElementById(el).insertAdjacentHTML(pos, fn); 
    }

    return {

        /// ----------------- BUILD NAVIGATION

        buildNavigation: function() {
            for(let i = 0; i < slides.length; i++) {

                const title = slides[i].title;
                const navId = [i];

                buildEl('beforeend', DOM().slideNav, navigationTemplate(title, navId));
            }
        },

        /// ----------------- BUILD SLIDES

        buildSlides: function() {
            for(let i = 0; i < slides.length; i++) {

                const imageUrl = slides[i].imageUrl;
                const title = slides[i].title;
                const description = slides[i].description;
                const slideId = [i];

                buildEl('beforeend', DOM().slideContainer, slideTemplate(imageUrl, title, description, slideId));
            }
        },
    };

})();

/// ----------------------------------------------- APPCONTROLLER

const AppController = (function() {
    const DOM = DOMArray.getDomStrings;

    function addEvents(el, arguments, fn) {
        for(let i = 0; i < arguments.length; i++) {
            el.addEventListener(arguments[i], fn);
        }
    };

    const setUpEventListeners = function() {
        addEvents(document.getElementById(DOM().slideBtnPrev), ['click'], InteractionController.slideLeftRight);
        addEvents(document.getElementById(DOM().slideBtnNext), ['click'], InteractionController.slideLeftRight);
        
        let aTags = document.getElementsByTagName('a');

        for (var i = 0; i < aTags.length; i++) {
            aTags[i].addEventListener('click', InteractionController.showSlide);
        }
    };

    return {
        init: function() {
            UIController.buildNavigation();
            UIController.buildSlides();
            InteractionController.showInitialSlide();
            InteractionController.hidePrevBtn();
            setUpEventListeners();
        }
    };

})(UIController);

AppController.init();
