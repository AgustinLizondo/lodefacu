let buttonNav = document.getElementById('buttonNav');
let entireNav = document.getElementById('entireNav');
buttonNav.addEventListener('click', ()=>{
    entireNav.classList.toggle('shown')
});

let selectionNav = document.querySelectorAll('.selectionNav');
for(let i of selectionNav){
    i.addEventListener('click', ()=>{
        
        entireNav.classList.toggle('shown')
    });
}

let upArrow = document.getElementById('upArrow');

upArrow.addEventListener('click',()=>{
    window.scrollTo(0, 0)
});

let instagramButton = document.querySelector('fa-instagram-square');
let facebookButton = document.querySelector('fa-facebook-square');
let whatsappButton = document.querySelector('fa-whatsapp-square');
let pedidosyaButton = document.querySelector('fa-motorcycle');

instagramButton.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/lodefacu/', '_blank');
})

facebookButton.addEventListener('click', ()=>{
    window.open('https://www.facebook.com/lodefacuok/', '_blank');
})

whatsappButton.addEventListener('click', ()=>{
    window.open('https://wa.me/541161149333', '_blank');
})

pedidosyaButton.addEventListener('click', ()=>{
    window.open('https://www.pedidosya.com.ar/restaurantes/san-isidro/lo-de-facu-bajo-menu?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action', '_blank');
})