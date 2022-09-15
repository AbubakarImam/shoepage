//grab everything
const btn = document.querySelector('.mobile-button');
const menu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const shoppingCart = document.querySelector('.shopping-cart');
const cart = document.querySelector('.cart-menu');
const totalCount = document.querySelector('.number');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn')
//add event listeners
btn.addEventListener('click', ()=> {
    openMenu.classList.add("hidden");
    menu.classList.toggle("hidden");
})
closeMenu.addEventListener('click', ()=> {
    menu.classList.add("hidden");
    openMenu.classList.remove("hidden");
    
})
cart.addEventListener('click', () => {
    shoppingCart.classList.toggle("hidden")
})
//Product counter
let count = 0;
totalCount.innerHTML = count;
minusBtn.addEventListener("click", ()=> {
    count--;
    totalCount.innerHTML = count;
});
plusBtn.addEventListener("click", ()=> {
    count++;
    totalCount.innerHTML = count;
});
// Product Slideshow

let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(moveStep) {
    showSlides(slideIndex += moveStep);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden')
    }
    slides[slideIndex - 1].classList.remove('hidden');
}
// Cart Functions
let removecartitem = document.getElementsByClassName("delete-btn");
for(let i = 0; i < removecartitem.length; i++) {
    let button = removecartitem[i];
    button.addEventListener('click', function(event) {
        let clickedbutton = event.target;
        clickedbutton.parentElement.parentElement.remove()[0];
    })
}
 // Total Price
 function getTotal () {
 totalElement = document.getElementsByClassName("total-price")[0]
totalPrice = totalElement.innerHTML
 priceElement = document.getElementsByClassName("price")[0]
 price = parseFloat (priceElement.innerHTML.replace('$', ''))
 quantityElement = document.getElementsByClassName("item-quantity")[0]
 quantity = parseFloat(quantityElement.innerHTML)
 console.log(price, quantity)
 for (i = 0; i < totalElement.length; i++ ) {
     let total = 0
     totalP = total + (priceElement * quantityElement)
     console.log(totalP) }
    }
    getTotal()
//  function getTotal () {
//     let total = (priceElement * quantityElement)
//     console.log(total)
//  }
//  }
 
