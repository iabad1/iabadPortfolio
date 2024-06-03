// 6/3/2024

//on gallery image click, show the slide show gallery

let galleryView = document.getElementById('gallery-view');
let selectedImages = document.getElementsByClassName('grid-img');
let galleryImage = document.getElementById('gallery-image');
let body = document.body;

//buttons
let closeButton = document.getElementById('gallery-close-button');
let prevButton = document.getElementById('gallery-prev-button');
let nextButton = document.getElementById('gallery-next-button');

var currentIndex = 0;

const openGallery = (index) =>{
    //body.style = 'overflow: hidden';
    //remove hidden class
    
    currentIndex = index;
    galleryView.classList.remove('hidden');
    const overflowProp = 'hidden';
    body.style.setProperty('overflow', overflowProp);

    console.log(selectedImages[index]);
    galleryImage.src = selectedImages[index].src;
  
}

const closeGallery = ()=>{
    galleryView.classList.add('hidden');
    body.style.removeProperty('overflow');


}

const goPreviousImage = () =>{

    if(currentIndex !== 0){
        currentIndex--;
    }
    galleryImage.src = selectedImages[currentIndex].src;

}

const goNextImage = () =>{
    if(currentIndex !== 3){
        currentIndex++;
    }
    galleryImage.src = selectedImages[currentIndex].src;

}