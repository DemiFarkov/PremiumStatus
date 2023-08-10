let popupBg = document.querySelector('.popupBg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.openPopup');
let closePopupButton = document.querySelector('.closePopup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Чтобы не перезагружалась страница, пока не будет использоваться AJAX
        popupBg.classList.add('active');
        popup.classList.add('active');
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    })
});

closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    document.getElementsByTagName('html')[0].style.overflowY = "scroll";
});

document.addEventListener('click', (e) => { 
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active'); 
        document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }
});

// slider

let offset = 0;
const sliderLIne = document.querySelector('.sliderLine');

document.querySelector('.sliderNext').addEventListener('click', function (){
    offset += 100;
    if (offset > 700){
        offset = 0;
    }
    sliderLIne.style.left = -offset + '%';
});

document.querySelector('.sliderBack').addEventListener('click', function (){
    offset -= 100;
    if (offset < 0){
        offset = 700;
    }
    sliderLIne.style.left = -offset + '%';
});