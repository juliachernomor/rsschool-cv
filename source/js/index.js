import '../scss/style.scss';
import  {calcWidth} from './width';
import  {scrollHeader} from './header';

window.addEventListener('DOMContentLoaded', () => {
calcWidth();
scrollHeader();
})