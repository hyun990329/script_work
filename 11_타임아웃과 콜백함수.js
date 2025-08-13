// setTimeout(실행할 함수, 지연 시간(ms))
// ms : 1000 -> 1s


// 1. 기본 사용법
function firstTimer(){
  console.log('1. 기본 사용법');
let basicTimer = setTimeout(function(){
  console.log('3초가 지났어요')
}, 3000);
}


// Timeout 초기화
// clearTimeout(basicTimer);



// 2. 함수의 이름으로 전달하기
function secondTimer(){
console.log('2. 함수의 이름으로 전달하기');
const sayHello = function(){
  console.log('안녕하세요')
}
const secondTimer = setTimeout(sayHello, 2000);
}


// 이곳에서 함수 테스트하기
firstTimer()
secondTimer()