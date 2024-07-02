const header = document.querySelector('.header');
const main = document.querySelector('main');

let x =header.offsetHeight;
main.style.paddingTop = x + 'px';

const scrollHeader =  () => {
    window.addEventListener('resize', () => {
       let  x = header.offsetHeight;
        main.style.paddingTop = x + 'px';
    })
}

export {scrollHeader};