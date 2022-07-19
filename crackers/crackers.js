let totalamount=0;//no change
let actualtot=0;//no change
let subtotal1=0;//copy paste this after adding new row and update number to serial number
let actsubtotal1=0;//copy paste this after adding new row and update number to serial number
let subtotal2=0;
let actsubtotal2=0;
let subtotal3=0;
let actsubtotal3=0;//paste new row data after this

function send1(i){//copy paste function from { to } and update send number 
    x=document.getElementById("subtotal1");//update subtotal number
    x.value=i*9;// update 9 to product prize
    subtotal1=i*9;// update 9 to product prize
    actsubtotal1=i*27;// update 27 to product actual prize
}//copy till here
function send2(i){
    x=document.getElementById("subtotal2");
    x.value=i*10;
    subtotal2=i*10;
    actsubtotal2=i*45;
}
function send3(i){
    x=document.getElementById("subtotal3");
    x.value=i*8;
    subtotal3=i*8;
    actsubtotal3=i*22;
}//paste after this
function submit(){//paste before this
    totalamount=subtotal1+subtotal2+subtotal3;//add subtotal wid updataed number as you add a new row each time;
    actualtot=actsubtotal1+actsubtotal2+actsubtotal3;//add actsubtotal wid updataed number as you add a new row each time;
    z=document.getElementById("totalamt");//no change after this
    z.value=totalamount;
    a=document.getElementById("actualtot");
    a.value=actualtot;
}