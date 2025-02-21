const daysElement=document.querySelector(".days");
const hoursElement=document.querySelector(".hours");
const minutesElement=document.querySelector(".minutes");
const secondsElement=document.querySelector(".seconds");
const heading=document.querySelector("hi");



const second =1000,
minute=60*second,
 hour=60*minute, 
 day=24*hour;

 const timerFunction=()=>{

    const now =new Date();
    let dd =String(now.getDate()).padStart(2,"0"),
     mm =String(now.getMonth()+1).padStart(2,"0"),
     yyyy =now.getFullYear();

     const enteredDay=prompt("Enter Day").padStart(2,"0");
     const enteredMonth=prompt("Enter Month").padStart(2,"0");

     console.log(`${enteredMonth}/${enteredDay}/${yyyy}`);

     const targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

    setInterval(()=>{
        const timer=new Date(targetDate).getTime();
    const today=new Date().getTime();

    const difference=timer-today;
    const leftDay=Math.floor(difference / day);
    const leftHour=Math.floor((difference % day)/hour);
    const leftMinute=Math.floor((difference % hour)/minute);
    const leftSecond=Math.floor((difference % minute)/second);

    daysElement.innerText=leftDay;
    hoursElement.innerText=leftHour;
    minutesElement.innerText=leftMinute;
    secondsElement.innerText=leftSecond;
    },0);
 };

 timerFunction();



 

