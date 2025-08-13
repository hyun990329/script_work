// 명시적 형 변환 (함수 이용해서 변환)
let age = 22;
let strAge = age.toString();
console.log(typeof age)
console.log(typeof strAge)

// 묵시적 형 변환
console.log(typeof +strAge)

// 문자를 숫자로 명시적 형 변환
console.log('-------------------------------')
let strNumber = '99';
console.log(typeof strNumber);
let number = parseInt(strNumber);
console.log(typeof number)