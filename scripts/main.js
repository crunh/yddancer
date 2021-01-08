// 设置标题
let myHeading = document.querySelector('h1');
myHeading.textContent = '伊豆的舞女';


// 切换图片
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/641.jpg') {
      myImage.setAttribute('src', 'images/642.jpg');
    } else {
      myImage.setAttribute('src', 'images/641.jpg');
    }
}


// 切换用户
let myButton = document.querySelector('button');
// myHeading = document.querySelector('h1');


function setUserName() {
    // debugger
    let myName = prompt('请输入你的名字。');
    // localStorage.setItem('name', myName);
    if(!myName || myName === null) {
        setUserName();
      } else {
        debugger
        localStorage.setItem('name', myName);
        myHeading.textContent = '《短篇小说选》' + myName;
      }
  }
myButton.onclick = function() {
    setUserName();
 }