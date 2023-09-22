const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar-section");
const closebtn = document.getElementById("close");

// the navbar will work according to the media size
if (bar){
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (closebtn){
    closebtn.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
}
// For the sproduct.html
// When the image is clicked that particulart image will be appeared in the main image
const mainImage = document.getElementById("MainImg");
const subImages = document.getElementsByClassName("small-img");

// looping through all the sub images and when any of them is clicked it
for (let i = 0; i < subImages.length; i++){
    subImages[i].addEventListener("click", () => {
        mainImage.src = subImages[i].src;
    });
}

// when clicked on the product image it will redirected to the product details page
const imageClicked = document.getElementsByClassName("pro");

for (let i = 0; i < imageClicked.length; i++){

    imageClicked[i].addEventListener("click", () => {
        window.location.href = "sproduct.html";
    })
}






