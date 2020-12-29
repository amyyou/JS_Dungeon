JavaScript 題目篇 - 新手 JS 地下城(2F - 時鐘)

使用技術 : HTML 、CSS 、SCSS、Javascript


挑戰目標
1. 需使用 JS 原生語法的 getDate() 撈取時間，不可用套件
2. 需使用 JS 原生語法的 setTimeout() 或 setInterval()，進階使用 requestAnimationFrame()
3. 持續讓秒針、分針、時針能夠以台北時區移動


CSS語法
1.響應式圖片設計
2.初始化將時針、分針、秒針定位在12點鐘位置
  -使用 transform-origin 重置旋轉點
  -使用 transform: rotate() 調整各指針角度，


JS語法
1.使用Date() 取得本地時間，並呼叫內建函式 getSeconds()、getMinutes()、getHour()
2.計算旋轉角度:時鐘轉一圈共360度
  -每動一秒鐘轉6度 : 一秒走一格，角度為(360deg/60 sec) 6度，並加上圖片的旋轉角度
  -每動一秒鐘，分針轉6/60=0.1度
  -每轉60分鐘，時針轉30度(360deg/12)->每分鐘，時針轉30/60度


3.JS更新UI(更新指針角度，新增class)   
  -docoument.querySelector('')
  -setAttribute(‘style’,transform: rotate(deg))

4.執行
  使用 requestAnimationFrame()刷新畫面