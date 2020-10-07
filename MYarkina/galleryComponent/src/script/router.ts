import {Gallery} from "./gallery";
import { IComponent } from "./icomponents";
import { View } from "./view";

export class Router  implements IComponent{
    private opth = window.location.search.substr(1);
    private main:any;
    
    build(param:any){
        if(window.location.pathname == '/view'){
            this.main = new View();}
        else{
            this.main = new Gallery();
        }
        this.main.build(param);
        this.main.setViewParams(this.opth);
    }
    
    
    setViewParams(){}
    
    destroy(){
        this.main.destroy();
    }
    
}