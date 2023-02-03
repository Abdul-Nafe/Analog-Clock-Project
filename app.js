  const hourEl = document.querySelector(".hour");
  const minuteEl = document.querySelector(".minute");
  const secondEl = document.querySelector(".second");
 function updateClock(){
     const currDate = new Date();
     
     const hour = currDate.getHours();
     const minutes = currDate.getMinutes();
     const second = currDate.getSeconds();
     const hourDeg = (hour / 12) * 360;
     const minuteDeg = (minutes / 60) * 360;
     const secondDeg = (second / 60) * 360;
     hourEl.style.transform = `rotate(${hourDeg}deg)`;
     minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
     secondEl.style.transform = `rotate(${secondDeg}deg)`;
     
    
     
 }
 setInterval(updateClock , 1000);
 