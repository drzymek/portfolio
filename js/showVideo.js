const btn = document.querySelector('.aboutMovieBtn');
const picture = document.querySelector('.commodore img');
const link = document.querySelector('.commodore p');
const video = document.querySelector('.commodore iframe');
const closeVideoBtn = document.querySelector('.commodore .far');

const playVideo = () => {
    picture.classList.toggle('hide');
    link.classList.toggle('hide');
    video.classList.toggle('active');
    closeVideoBtn.classList.toggle('active');
}

btn.addEventListener('click', playVideo);
closeVideoBtn.addEventListener('click', playVideo);

const windowHeight = window.innerHeight;
const aboutHeight = document.querySelector('#about').clientHeight;
const aboutFromTop = document.querySelector('#about').offsetTop;
const hideVideo = () => {
    const scrollValue = window.scrollY;
    if (scrollValue < aboutFromTop - aboutHeight || scrollValue > aboutHeight + windowHeight) {
        video.classList.remove('active')
        closeVideoBtn.classList.remove('active');
        picture.classList.remove('hide');
    }
}

window.addEventListener('scroll', hideVideo);

// show/hide video for media max:1024px
const introduce = document.querySelector('.introduce');
const videoSmallScreen = document.querySelector('.commodore');
const videoForSmallScreen = () => {
    introduce.classList.toggle('on');
    videoSmallScreen.classList.toggle('on');
}


btn.addEventListener('click', videoForSmallScreen);
closeVideoBtn.addEventListener('click', videoForSmallScreen);