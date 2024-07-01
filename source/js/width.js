const calcWidth = () => {
    window.addEventListener('resize', () => {
        let wrapper = document.querySelector('.wrapper')
        let video = document.querySelector('.video')

        let width = wrapper.clientWidth;
        console.log(width);

        video.style.left = `calc(100vw - (100vw/2) + ${width}`;
    });
}


export {calcWidth};