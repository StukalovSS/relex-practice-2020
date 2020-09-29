const mainCanvas = document.getElementById("maincanvas") as HTMLCanvasElement;
const context = mainCanvas.getContext("2d");
mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;


//оси графика
function oc(){
    context.beginPath();
    console.log(window.innerWidth);
    context.moveTo((mainCanvas.width/2),0);
    context.lineTo((mainCanvas.width/2),mainCanvas.height);
    context.stroke();

    context.beginPath();
    context.moveTo(0,(mainCanvas.height/2));
    context.lineTo(mainCanvas.width,(mainCanvas.height/2));
    context.stroke();
}


//деления по оси X
function delX(x:any,y:any){
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x,y+10);
    context.stroke();
}


//деления по оси Y
function delY(x:any,y:any){
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(x+10,y);
        context.stroke();
}


//черчение делений
function del(k:any){
    for(let i=mainCanvas.width/2;i<mainCanvas.width;i+=k){
        delX(i,(mainCanvas.height/2)-5);}
            
    for(let i=mainCanvas.width/2;i>0;i-=k){
        delX(i,(mainCanvas.height/2)-5);}
            
    for(let i=mainCanvas.height/2;i<mainCanvas.height;i+=k){
        delY((mainCanvas.width/2)-5,i);}
            
    for(let i=mainCanvas.height/2;i>0;i-=k){
        delY((mainCanvas.width/2)-5,i);}
}


function parabol(x:any){
    return x*x;
}


let curStep=20;
oc();
del(curStep);
function graf(f:any,color:any){
    let k=0,t=true,i=mainCanvas.width/2,predX = i,predY=mainCanvas.height/2;
    while(i<mainCanvas.width && t){
        if((mainCanvas.height/2-curStep*k)>0){
            context.beginPath();
            context.arc(i,mainCanvas.height/2-curStep*f(k),1,0,2*Math.PI);
            context.fill();
            context.beginPath();
            context.moveTo(predX,predY);
            predX=i;
            predY=mainCanvas.height/2-curStep*f(k);
            context.lineTo(predX,predY);
            context.strokeStyle=color;
            context.stroke();
            k++;
            i+=curStep;
        }
        else{t = false;}
    }

    i=mainCanvas.width/2,k=0,t=true,predX = i,predY=mainCanvas.height/2
    while(i>0 && t){
        if((mainCanvas.height/2-curStep*k)>0){
            context.beginPath();
            context.arc(i,mainCanvas.height/2-curStep*f(k),1,0,2*Math.PI);
            context.fill();
            context.beginPath();
            context.moveTo(predX,predY);
            predX=i;
            predY=mainCanvas.height/2-curStep*f(k);
            context.lineTo(predX,predY);
            context.stroke();
            k--;
            i-=curStep;
        }
        else{t = false;}
    }
}


graf(parabol,"black");
function cub(x:any){
    return x*x*x;
}

graf(cub,"black");



mainCanvas.addEventListener("wheel",function(event){
    var y = event.deltaY;	
    if(y > 0 ){
        if(curStep<100){
            context.clearRect(0,0,mainCanvas.width,mainCanvas.height);
            oc();
            del(curStep+=20);
            graf(parabol,"black");
            graf(cub,"black");
        }
    }
    else if(curStep !=20){
        context.clearRect(0,0,mainCanvas.width,mainCanvas.height);
        oc();
        del(curStep-=20);
        graf(parabol,"black");
        graf(cub,"black");
    }
});	