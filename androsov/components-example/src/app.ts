import Router from './components/router';
import './style.css'

let router = new Router();
router.build();

window.addEventListener('popstate', () => {
    router.destroy();
    router.build();
})