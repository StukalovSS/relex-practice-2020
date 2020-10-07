import {Gallery} from "./gallery";
import { IComponent } from "./icomponents";
import { View } from "./view";

export class Router  implements IComponent{
    private opth = window.location.search.substr(1);
    
    
    build(){
        if(window.location.pathname == '/view'){
        let main = new View();
        main.build();
        main.setViewParams(this.opth);}
        else{
            let main = new Gallery();
            main.build();
            main.setViewParams(this.opth);
        }
    }
    
    
    setViewParams(){}
    
    destroy(){}
    
}