//Author: Isiah Abad
//Date Updated: 1/24/21
/*The purpose of this script is to change the description and photo on click*/

//select id's and add classes when they are active or non-active

//1) when the page is first loaded, first dot should be active

var fadeClass = document.getElementsByClassName('fade');
var fadeDetailsClass = document.getElementsByClassName('fade-details');
var fadeImageClass = document.getElementsByClassName('fade-image');
var activeCircle = document.getElementsByClassName('circle');
var headerLinks = document.getElementsByClassName('header-links');

var currentIndex = 0;
var currentNavIndex = 0;
var dotIndex;


//make the first dot, description, title, and image active
fadeClass[currentIndex].classList.add('active');
fadeDetailsClass[currentIndex].classList.add('active');
activeCircle[currentIndex].classList.add('active-circle');
fadeImageClass[currentIndex].classList.add('active-image');
headerLinks[currentIndex].classList.add('active-nav-link');

function currentSlide(dotIndex){

    console.log(dotIndex);

    //hide the current active
    fadeClass[currentIndex].classList.remove('active');
    fadeDetailsClass[currentIndex].classList.replace('active', 'fade-details');
    activeCircle[currentIndex].classList.remove('active-circle');
    fadeImageClass[currentIndex].classList.remove('active-image');
    
    //set the current index
    currentIndex = dotIndex;
    
    //check 3 conditions
    if(dotIndex === 0 | dotIndex === 1 | dotIndex === 2 ){

        fadeClass[currentIndex].classList.add('active');

        fadeDetailsClass[currentIndex].classList.add('active');

        activeCircle[currentIndex].classList.add('active-circle');

        fadeImageClass[currentIndex].classList.add('active-image');

    }

 
}


function currentNav(dotIndex){

    console.log(dotIndex);

    //hide the current active
    headerLinks[currentNavIndex].classList.remove('active-nav-link');
    
    //set the current index
    currentNavIndex = dotIndex;
    
    //check 3 conditions
    if(dotIndex === 0 | dotIndex === 1 | dotIndex === 2 ){

        headerLinks[currentNavIndex].classList.add('active-nav-link');

    }

 
}

