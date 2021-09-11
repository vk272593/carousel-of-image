const imgs =document.getElementById('imgs');
const img =document.querySelectorAll("#imgs img");

let indx=0;
function run(){
    indx++;
    if(indx>img.length-1){
        indx=0;
    }
    imgs.style.transform=`translateX(${-indx*500}px)`;
}
setInterval(run, 2000);
