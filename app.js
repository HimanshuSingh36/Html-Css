let today =new Date();
let day =today.getDay();
let daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is:"+ daylist[day] +".");
let hour=today.getHours();
let minute=today.getMinutes();
let second=today.getSeconds();
let prepend =(hour>=12)? "PM" : "AM";
hour = (hour>=12) ? hour -12:hour;
if(hour==0 && prepend=="PM")
{
    if(minute===0 && second===0)
    {
        hour=12;
    }
}
console.log("Current time: "+hour+":"+minute+":"+second+" "+prepend);