const wrapper = document.querySelector('.wrapper')
const video = document.querySelector('.video');

let width = wrapper.clientWidth + 'px';
video.style.left = `calc(50vw + ${width}/4)`;

const calcWidth = () => {
    window.addEventListener('resize', () => {
        width = wrapper.clientWidth + 'px';
        video.style.left = `calc(50vw + ${width}/4)`;
        console.log(video.style.left)
    })
}

export {calcWidth};

