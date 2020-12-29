let mainList = document.getElementById('mainList');
let strBody = '';

updateListUI()

function updateListUI() {
    let strTitle = `<li class="card-title">
    <h1>九九乘法表</h1>
    <h2>MULTIPLICATION CHART</h2>
  </li>
`
    for (let i = 2; i <= 9; i++) {
            innerList(i);
            strTitle += `<li class="card">
                <ul class="card-wrap">
                   <li class="card-num-title">${i}</li>
                   ${strBody}
                </ul>
            </li>
            `
            strBody = '';
    }

    mainList.innerHTML = strTitle;
}

function innerList(num) {
    for (let i = 1; i <= 9; i++) {
        strBody += `<li>${num}x${i}=${num * i}</li>`
    }
}


// for(let i=2;i<=9;i++){
//     for(let j=1 ; j<=9;j++){
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }