//generate random color
const random_color=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};

//console.log(Math.floor(Math.random()*16)) 0 to 16 will be random
let interval_id;
const start_changing_color=function(){

   if(!interval_id){
    interval_id=setInterval(chang_bg_color,800);
}

    function chang_bg_color(){
        document.body.style.backgroundColor=random_color();
    }
};


const stop_changing_color=()=>{
    clearInterval(interval_id)
    interval_id=null;
};
//start
document.querySelector('#start').addEventListener
('click',start_changing_color);
//stop
document.querySelector('#stop').addEventListener
('click',stop_changing_color);