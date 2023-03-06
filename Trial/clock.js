const CLOCK = document.querySelector("#clock");
const date = new Date();

function getTime(){
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const today = String(date.getDate()).padStart(2,"0");
    const thismonth = String(date.getMonth()+1).padStart(2,"0");
    const thisyear = date.getFullYear();
    CLOCK.innerText = (`${thisyear}/${thismonth}/${today} ${hours}시 ${min} 분`);
}

getTime();
setInterval(getTime, 1000);