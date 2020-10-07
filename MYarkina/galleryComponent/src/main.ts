import { Router } from "./script/router";


let p = new Router();
p.build(p);
window.addEventListener('popstate',function(){
    p.destroy();
    p = new Router();
    p.build(p);
});