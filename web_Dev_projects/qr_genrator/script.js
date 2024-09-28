let  imgbox=document.getElementById("qr_box");
let  imgqr=document.getElementById("qr_img");
let  text=document.getElementById("search");

function generateqr(){
    imgqr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
}