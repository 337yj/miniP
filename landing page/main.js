let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML", "Learn to CSS" ,"Learn to Javascript"]
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];

let selectStringArr = selectString.split("");

function dynamic(randomArr) {
  console.log(randomArr);
  if(randomArr.length>0) {
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    },80);
  }
}

dynamic(selectStringArr);
console.log(selectString);
console.log(selectStringArr);


function blink(){
  target.classList.toggle("active");
}

setInterval(blink, 500);  // 0.5초 간격으로 반복


