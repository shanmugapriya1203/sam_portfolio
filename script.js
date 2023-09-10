const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')
// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//Light mode dark mode


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const para=document.querySelector(".para")
const skill=document.querySelector(".skills_text")
const txt=document.querySelector(".about_text")
const nm=document.querySelector(".name")
const footer=document.querySelector(".footer")
const met=document.querySelectorAll(".me")
const icons=document.querySelectorAll(".home_social-icon")
const names=document.querySelector(".home_title")
const nt=document.querySelector(".home_titlee")
const moon=document.getElementsByClassName("bi bi-brightness-high-fill bi-moon")



toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
 if(this.classList.toggle('bi-brightness-high-fill')){
    para.style.color="aliceblue";
    nt.style.color="white";
    body.style.background='black';
    txt.style.color='aliceblue';
    skill.style.color='aliceblue';
    names.style.color="aliceblue";
    icons.style.color="aliceblue";

  
 }
 else{
    para.style.color="black";
    nt.style.color="black";
    body.style.background='white';
    txt.style.color='black';
    skill.style.color='black';
    names.style.color="black";
    icons.style.color="black";
  

 }
 
})