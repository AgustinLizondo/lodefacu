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

let instagramButton = document.getElementById('instagramButton');
let facebookButton = document.getElementById('facebookButton');
let whatsappButton = document.getElementById('whatsappButton');
let pedidosyaButton = document.getElementById('pedidosyaButton');

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