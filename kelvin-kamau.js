const images = [
    {
        img:'kelvin-kamau-1.jpg',
        name:'Kelvin Kamau',
        info:'The dream is the royal road to the unconcious - Sigmud Fred'
    },
    {
        img:'kelvin-kamau-2.jpeg',
        name:'Kelvin Kamau',
        info:'The gem cannot be polished without friction nor a man without trials - Chinese Proverb'
    },
    {
        img:'kelvin-kamau-3.jpeg',
        name:'Kelvin Kamau',
        info:'The essence of genius is to know what to overlook - William James'
    },
    {
        img:'kelvin-kamau-4.jpeg',
        name:'Kelvin Kamau',
        info:'He that wrestles with us strengthen our nerves and sharpen our skills. Our antagonist is our helper - Burke(1729-1797)'
    },
    {
        img:'kelvin-kamau-5.png',
        name:'Kelvin Kamau',
        info:'May God grant me the power to struggle to become not another man but a better man - Samuel Taylor Coleridge'
    }

]








// Selecting the items;
const preloader = document.querySelector('.preloader');
const menu = document.querySelector('.menu');
const linksContainer = document.querySelector('.links-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const img = document.querySelector('.img');
const author = document.querySelector('.name');
const info = document.querySelector('.info');
const nav = document.querySelector('.nav');
const showTop = document.querySelector('.top');

const scrollLinks = document.querySelectorAll('.links');
console.log(scrollLinks)









// Event Listeners;
window.addEventListener('DOMContentLoaded', nextImage);
window.addEventListener('load', hidePreloader);
menu.addEventListener('click', showMenu);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);
window.addEventListener('scroll', showNav);









// Functions;
function hidePreloader(){

        preloader.classList.add('hide-preloader');
    
}

function showMenu(){
    linksContainer.classList.toggle('show-links');
}

let currentImage = 0;

function nextImage(){
 
 let image = images[currentImage];
 img.src = image.img;
 author.textContent = image.author;
 info.textContent = image.info;
}
function showNext(){
    currentImage++;
   
    if(currentImage > images.length-1){
        currentImage = 0;
       
    }
    nextImage();
}

function showPrev(){
    currentImage--;
   
    if(currentImage < 0){
        currentImage = images.length-1;
    }
    nextImage();
}
function showNav(){
    let navHeight = nav.getBoundingClientRect().height;
    let navPosition = nav.getBoundingClientRect().top;
    let scrollHeight = window.scrollY;
 if(scrollHeight > navHeight){
    nav.classList.add('fixed');
 }
 else{
    nav.classList.remove('fixed');
 }

 if(scrollHeight > 600){
    showTop.classList.add('show-top-nav');
 }
 else{
    showTop.classList.remove('show-top-nav');
 }

}
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();

        let fixedNav = nav.classList.contains('fixed');
    
        let navHeight = nav.getBoundingClientRect().height;
        let id = e.currentTarget.getAttribute('href');
        console.log(id);
        let element = document.getElementById(id);
        let linksHeight = linksContainer.getBoundingClientRect().height;
        let topPosition = element.offsetTop;
        console.log(topPosition)
        // topPosition = topPosition - navHeight;
        // if(!fixedNav){
        //     topPosition = topPosition - navHeight;
        // }
        // if(navHeight > 88){
        //     topPosition = topPosition + navHeight;
        // }
        window.scrollTo({
            left:0,
            top:topPosition,
        });
        linksContainer.classList.remove('show-links'); 
    })
})

