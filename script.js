let send = document.createElement("a");
    send.innerHTML = "Send";
    send.setAttribute("onClick", "check()");
    send.style.fontSize = "30px";
    send.style.padding = "20px";
    send.style.backgroundColor = "lightblue";
    send.style.borderRadius = "15px";

let gamebox = document.getElementById("gamebox"); 

function work(){ 
    let input = document.getElementById("diasUberiTelefon"); 
    let name = input.value; 
    let nextstep = document.createElement("h2"); 
    nextstep.innerHTML = "Привет, " + name + "! В Алматы прилетел метеор, на котором сидел инопланетянин, твои действия:"; 
 
    let chtodelat= document.createElement("input");
    chtodelat.placeholder = "Что будешь делать?";


    gamebox.appendChild(nextstep);
    gamebox.appendChild(chtodelat);
    gamebox.appendChild(send);
}


function check(){
    let pobeda = document.createElement("h1");
    pobeda.innerHTML = "А ты хорош, погнали!";
    gamebox.appendChild(pobeda);
}