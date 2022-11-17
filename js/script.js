let iconBar = document.querySelector('.bar-icon');
let sideBar = document.querySelector('.side-bar');
let bodyContent = document.querySelector('.body-content');
let myTask = document.querySelector('.my-task');
let myProflie = document.querySelector('.my-profile');
let myProflies = document.querySelector('.my-profiles');
let about = document.querySelector('.about');
let aboutUs = document.querySelector('.about-us');


iconBar.addEventListener('click', ()=>{
    iconBar.classList.toggle('activeIconBar')
    sideBar.classList.toggle('activeBar')
})

myTask.addEventListener('click', ()=>{
    bodyContent.style.display = 'flex';
    myProflies.style.display = 'none';
    aboutUs.style.display = 'none';
    iconBar.classList.toggle('activeIconBar')
    sideBar.classList.toggle('activeBar')
})
myProflie.addEventListener('click', ()=>{
    myProflies.style.display = 'flex';
    bodyContent.style.display = 'none';
    aboutUs.style.display = 'none';
    iconBar.classList.toggle('activeIconBar')
    sideBar.classList.toggle('activeBar')
})
about.addEventListener('click', ()=>{
    aboutUs.style.display = 'block';
    bodyContent.style.display = 'none';
    myProflies.style.display = 'none';
    iconBar.classList.toggle('activeIconBar')
    sideBar.classList.toggle('activeBar')
})
