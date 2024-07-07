import '../scss/style.scss';
import { calcWidth } from './width';
import { effectMenu } from './header';
import { scrollHeader } from './scrollheader';

window.addEventListener('DOMContentLoaded', () => {
    calcWidth();
    scrollHeader();
    effectMenu();
})