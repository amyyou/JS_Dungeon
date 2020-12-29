function setClock(){
    //取得本地時間
    let currentTime = new Date();
    let currentTime_second = currentTime.getSeconds();
    let currentTime_minute = currentTime.getMinutes();
    let currentTime_hour = currentTime.getHours();

   
//    計算旋轉角度:時鐘轉一圈共360度
//   -每動一秒鐘轉6度 : 一秒走一格，角度為(360deg/60 sec) 6度，並加上圖片的旋轉角度
//   -每動一秒鐘，分針轉6/60=0.1度
//   -每轉60分鐘，時針轉30度(360deg/12)->每分鐘，時針轉30/60度
    let angle_second = currentTime_second*6;
    let angle_minute = (currentTime_minute*6)+(currentTime_second*6/60);
    let angle_hour = (currentTime_hour*30)+(currentTime_minute*0.5);
   

    let clock_second = document.querySelector('.clock_second');
    let clock_minute = document.querySelector('.clock_minute');
    let clock_hour = document.querySelector('.clock_hour');

    clock_second.setAttribute(`style`, `transform:rotate(${180 + angle_second}deg)`);
    clock_minute.setAttribute(`style`, `transform:rotate(${angle_minute}deg)`);
    clock_hour.setAttribute(`style`, `transform:rotate(${-90+angle_hour}deg)`);


    requestAnimationFrame(setClock);

}

requestAnimationFrame(setClock);
