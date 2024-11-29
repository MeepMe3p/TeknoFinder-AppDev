/* Footer Functions */

document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
	const scrollToTopBtn = document.getElementById("scrollToTopBtn");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 300) {
		  scrollToTopBtn.style.display = "block";
		} else {
		  scrollToTopBtn.style.display = "none";
		}
	});

	scrollToTopBtn.addEventListener("click", () => {
		window.scrollTo({
		  top: 0,
		  behavior: "smooth",
		});
	});
});


const howItWorksLink = document.getElementById("citu360Link");
const howItWorksSection = document.getElementById("citu360");

howItWorksLink.addEventListener("click", function (event) {
	event.preventDefault();

	howItWorksSection.scrollIntoView({
		behavior: "smooth", 
		block: "start" 
	});
});

/* Image Slider */
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
=======
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});


const howItWorksLink = document.getElementById("howItWorksLink");
const howItWorksSection = document.getElementById("howItWorks");

howItWorksLink.addEventListener("click", function (event) {
  event.preventDefault();

  howItWorksSection.scrollIntoView({
    behavior: "smooth", 
    block: "start" 
  });
});

const visualMapLink = document.getElementById("visualMapLink");
const cituMapSection = document.getElementById("cituMap");

visualMapLink.addEventListener("click", function (event) {
  event.preventDefault();

  cituMapSection.scrollIntoView({
    behavior: "smooth", 
    block: "start"
  });
});
>>>>>>> 50d8d15 ((Initial Progress) Added progress for the main page. Yet to be finished.)
