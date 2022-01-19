let arr =[];
let arrvalue =[];
let display ="";
for (let i = 0; i < 8; i++) {
    arr[i]=[];
    for (let j = 0; j < 8; j++) {
        arr[i][j]='<input type="button"  id="no'+i+j+'" value="" onClick="clickFunction('+i+','+j+')"></input>';
    }
}
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        display += arr[i][j];
    }
    display += "<br/>";
}
document.getElementById("display").innerHTML = display;
for (let i = 0; i < 8; i++) {
    arrvalue[i]=[]
    for (let j = 0; j < 8; j++) {
        let a = Math.random()*10;
        if(a>8){
            arrvalue[i][j]='&#9827'
        }
        else arrvalue[i][j] = 0;
    }
}
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (arrvalue[i][j]=='&#9827'){
            arrvalue[i-1][j-1]+=1;
            arrvalue[i-1][j]+=1;
            arrvalue[i-1][j+1]+=1;
            arrvalue[i][j-1]+=1;
            arrvalue[i][j+1]+=1;
            arrvalue[i+1][j-1]+=1;
            arrvalue[i+1][j]+=1;
            arrvalue[i+1][j+1]+=1;
        }
    }
}

function restartGame(){
    display ="";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            arr[i][j]='<input type="button" id="no'+i+j+'" value="" onClick="clickFunction('+i+','+j+')"></input>';
        }
    }
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            display += arr[i][j];
        }
        display += "<br/>";
    }
    document.getElementById("display").innerHTML = display;

    for (let i = 0; i < 8; i++) {
        arrvalue[i]=[]
        for (let j = 0; j < 8; j++) {
            let a = Math.random()*10;
            if(a>8){
                arrvalue[i][j]='&#9827'
            }
            else arrvalue[i][j] = 0;
        }
    }
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arrvalue[i][j]=='&#9827'){
                arrvalue[i-1][j-1]+=1;
                arrvalue[i-1][j]+=1;
                arrvalue[i-1][j+1]+=1;
                arrvalue[i][j-1]+=1;
                arrvalue[i][j+1]+=1;
                arrvalue[i+1][j-1]+=1;
                arrvalue[i+1][j]+=1;
                arrvalue[i+1][j+1]+=1;
            }
        }
    }
}
function clickFunction(a,b){
    arr[a][b]='<input type="button"  id="no'+a+b+'" value="'+arrvalue[a][b]+'" onClick="clickFunction('+a+','+b+')"></input>';
    display ="";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            display += arr[i][j];
        }
        display += "<br/>";
    }
    document.getElementById("display").innerHTML = display;
}