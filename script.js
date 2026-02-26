function updateTime(){

document.getElementById("sl").innerHTML = new Date().toLocaleString("en-US",{timeZone:"Asia/Colombo"});

document.getElementById("jp").innerHTML = new Date().toLocaleString("en-US",{timeZone:"Asia/Tokyo"});

document.getElementById("kr").innerHTML = new Date().toLocaleString("en-US",{timeZone:"Asia/Seoul"});

document.getElementById("sg").innerHTML = new Date().toLocaleString("en-US",{timeZone:"Asia/Singapore"});

}

setInterval(updateTime,1000);

updateTime();
