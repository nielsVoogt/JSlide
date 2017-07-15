
/// -------------------------------------------------------------- SLIDE CONSTRUCTOR

let Slide = function(imageUrl, title, description) {
    this.imageUrl    = imageUrl;
    this.title       = title;
    this.description = description;
}

/// -------------------------------------------------------------- SLIDES

const slides = [
    new Slide('http://via.placeholder.com/350x150', 'title1', 'description1'),
    new Slide('http://via.placeholder.com/350x250', 'title2', 'description2'),
    new Slide('http://via.placeholder.com/450x150', 'title3', 'description3'),
    new Slide('http://via.placeholder.com/350x150', 'title4', 'description4'),
    new Slide('http://via.placeholder.com/350x250', 'title5', 'description5'),
    new Slide('http://via.placeholder.com/450x150', 'title6', 'description6'),
    new Slide('http://via.placeholder.com/350x150', 'title7', 'description7'),
    new Slide('http://via.placeholder.com/350x250', 'title8', 'description8'),
    new Slide('http://via.placeholder.com/450x150', 'title9', 'description9')
];

/// -------------------------------------------------------------- DOMSTRINGS

const DOMArray = (function() {
    const DOMstrings = {
        slideContainer   : 'slides-container',
        slideNav         : 'slide-nav',
        slideBtnPrev     : 'slide-btn-prev',
        slideBtnNext     : 'slide-btn-next',
        slideContent     : '.slide-content',
        activeSlideClass : 'slide-content--active',
        activeItemClass  : 'slide-navigation-item--active',
        navigationLinks  : '.slide-navigation-item a'
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
        return `<li class='slide-navigation-item'>
                    <a id='${id}'>
                        ${title}
                    </a>
                </li>`; 
    }

    const slideTemplate = function(imageUrl, title, description, id) {
        return `<div class="slide-content" data-id='${id}'>
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
