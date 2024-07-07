import '../scss/style.scss';
import { calcWidth } from './width';
import { effectMenu } from './header';
import { scrollHeader } from './scrollheader';
import './preloader';

window.addEventListener('DOMContentLoaded', () => {
    calcWidth();
    scrollHeader();
    effectMenu();
})