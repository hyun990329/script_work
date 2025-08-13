// 1. 단일 함수의 사용
console.log('1. 단일 함수의 사용');

// 함수를 정의만 해둔 상태
function calculate(number) {
 console.log(number * 100);
 return true;
}

// 함수를 호출
calculate(3);
console.log(calculate(4));






// 2. 여러개 파라미터 사용
console.log('2. 여러개 파라미터 사용');

// add 라는 함수를 선언하고 x, y를 받아
// 두 수를 더하여 결과를 리턴하는 함수를 작성
// 3, 4를 전달 -> 7 출력

function add(x, y) {
  return x + y;
}

let result = add(3, 4);
console.log(result);






// 3. default 파라미터 사용
console.log('3. default 파라미터 사용');

function minus(x, y = 1) {
  return x - y;
}

console.log(minus(3));
console.log(minus(3, 2));






// 4. 화살표 함수 (Arrow Function)
console.log('4. 화살표 함수 (Arrow Function)');

// 함수도 Object 다
const multiply = function(x, y) {
  return x * y;
}

console.log(multiply(3, 4));




console.log('4-1. 함수의 간편 표기법');

const divide1 = function(x, y) {
  return x / y;
}

const divide2 = (x, y) => x / y;
console.log(divide2(6,2));





console.log('4-2. 인자가 1개일 때');
// 제곱을 하는 함수
const power = x => x * x;
console.log(power(2));







// 5. 즉시 실행 함수
console.log('5. 즉시 실행 함수');
// 어떤 기능을 수행하는데
// 함수를 정의함과 동시에 실행해야 하는 경우
(function (x, y) {
  console.log(x % y)
}) (7, 3);







// 6. 함수 연습
console.log('6. 함수 연습');
// 두 수를 입력 받아서
// 두 수 사이의 짝수 값만 더하여 결과를 리턴하는 함수를
// => 함수를 이용해서 만드시오

const myFunction = function(x, y) {
  let sum = 0;

  // 두 변수를 비교해서 y가 크면 두 수를 바꾼다
  // 구조분해 할당
  if(x > y) [x, y] = [y, x]   // js 에서 자리 바꿀 때 쓰는 방법
  // if(x > y) {
  //   let temp = x;
  //   x = y;
  //   y = temp;
  // }

  // for 루프를 돌려서 짝수만 더하기
  for (let i = x; i <= y; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(myFunction(3, 9));