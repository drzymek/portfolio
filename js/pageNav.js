const btnSeeMore = document.querySelector('.seeMoreButton');
const navHome = document.querySelector('.liHome');
const navAboutMe = document.querySelector('.liAbout');
const navTechnologies = document.querySelector('.liTechnologies');
const navProjects = document.querySelector('.liProjects');
const navContact = document.querySelector('.liContact');
const contactArrow = document.querySelector('.contactArrow');


const scrollToAbout = () => {
    const aboutFromTop = document.querySelector('#about').offsetTop;
    window.scroll({
        top: aboutFromTop,
        behavior: 'smooth'
    })
}

const scrollToHome = () => {
    const homeFromTop = document.querySelector('#home').offsetTop;
    window.scroll({
        top: homeFromTop,
        behavior: 'smooth'
    })
}

const scrollToTechnologies = () => {
    const technologiesFromTop = document.querySelector('#technologies').offsetTop;
    window.scroll({
        top: technologiesFromTop,
        behavior: 'smooth'
    })
}

const scrollToProjects = () => {
    const projectsFromTop = document.querySelector('#projects').offsetTop;
    window.scroll({
        top: projectsFromTop,
        behavior: 'smooth'
    })
}

const scrollToContacts = () => {
    const contactsFromTop = document.querySelector('#contact').offsetTop;
    window.scroll({
        top: contactsFromTop,
        behavior: 'smooth'
    })
}

btnSeeMore.addEventListener('click', scrollToAbout);
navHome.addEventListener('click', scrollToHome);
navAboutMe.addEventListener('click', scrollToAbout);
navTechnologies.addEventListener('click', scrollToTechnologies);
navProjects.addEventListener('click', scrollToProjects);
navContact.addEventListener('click', scrollToContacts);
contactArrow.addEventListener('click', scrollToHome);


// mobile 
const navArrow = document.querySelector('div.arrow');
const navMobile = document.querySelector('nav.mobile');
const navHomeMobile = document.querySelector('.liHomeMobile');
const navAboutMeMobile = document.querySelector('.liAboutMobile');
const navTechnologiesMobile = document.querySelector('.liTechnologiesMobile');
const navProjectsMobile = document.querySelector('.liProjectsMobile');
const navContactMobile = document.querySelector('.liContactMobile');

const scrollToAboutMobile = () => {
    navArrow.classList.remove('on');
    navMobile.classList.remove('on');
    scrollToAbout();
}

const scrollToHomeMobile = () => {
    navArrow.classList.remove('on');
    navMobile.classList.remove('on');
    scrollToHome();
}

const scrollToTechnologiesMobile = () => {
    navArrow.classList.remove('on');
    navMobile.classList.remove('on');
    scrollToTechnologies();
}

const scrollToProjectsMobile = () => {
    navArrow.classList.remove('on');
    navMobile.classList.remove('on');
    scrollToProjects();
}

const scrollToContactMobile = () => {
    navArrow.classList.remove('on');
    navMobile.classList.remove('on');
    scrollToContacts();
}

navAboutMeMobile.addEventListener('click', scrollToAboutMobile);
navHomeMobile.addEventListener('click', scrollToHomeMobile);
navTechnologiesMobile.addEventListener('click', scrollToTechnologiesMobile);
navProjectsMobile.addEventListener('click', scrollToProjectsMobile);
navContactMobile.addEventListener('click', scrollToContactMobile);