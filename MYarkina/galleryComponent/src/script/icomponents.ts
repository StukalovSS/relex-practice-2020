
export interface IComponent{
    build(param:any):any;
    setViewParams(param:any,router:any):any;
    destroy():any;
}