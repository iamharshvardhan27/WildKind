//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 9000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}





// Function to hide styles defined in media queries
function hideMediaQueryStyles() {
    var elementsToHide = document.querySelectorAll('.thumbnail .item:not(:first-child), .thumbnail, .arrows');
    
    // Add a class to hide each element
    elementsToHide.forEach(function(element) {
      element.classList.add('hidden-by-media-query');
    });
  }
  
  // Function to show styles defined in media queries
  function showMediaQueryStyles() {
    var elementsToShow = document.querySelectorAll('.thumbnail .item:not(:first-child), .thumbnail, .arrows');
    
    // Remove the class to show each element
    elementsToShow.forEach(function(element) {
      element.classList.remove('hidden-by-media-query');
    });
  }
  
  // Listen for click event on the navigation bar menu
  var navMenu = document.getElementById('nav-menu');
  navMenu.addEventListener('click', function() {
    // Check if the styles are currently hidden
    var stylesHidden = document.querySelector('.thumbnail .item:not(:first-child).hidden-by-media-query');
  
    // Toggle the visibility of styles based on their current state
    if (stylesHidden) {
      // If styles are hidden, show them
      showMediaQueryStyles();
    } else {
      // If styles are shown, hide them
      hideMediaQueryStyles();
    }
  });

  


  function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  