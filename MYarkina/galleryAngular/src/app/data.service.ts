export class DataService{
  
    private data: string[] = [ "./assets/img/picture1.jpg","./assets/img/picture2.jpg","./assets/img/picture3.jpg","./assets/img/picture4.jpg","./assets/img/picture5.jpg"];
      
    getData(): string[] {        
        return this.data;
    }

    addData(name: string){   
        this.data.push(name);
    }

    deleteData(id:number){
        this.data.splice(id,1);
    }
    
}