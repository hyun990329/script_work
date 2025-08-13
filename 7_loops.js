// for loop 문법
// 자바와 동일
// #
// ##
// ###
// ####
// #####
// for(let i=0; i<=5; i++){}
for(let i=1; i<=5; i++){
  let star = ''
  for(let j=1; j<=i; j++){
    star = star + '#';
  }
  console.log(star)
}

// Java : advanced For 
// for(int x : data) {
// }

// Java Script
// for ~ in 구문 : 인덱스 기준
// for ~ of 구문 : Java의 advanced for랑 같음.

const ahn = {
  name : '안유진',
  year : 2003,
  group : 'ive'
}
console.log("================")
console.log('for ~ in : object 순회')
// for ~ in
for(let x in ahn){
  console.log(ahn[x]);
}
console.log("================")
console.log('for ~ of : 배열, 리스트에서 사용가능')
let ive = ['장원영', '안유진', '이서'];
for(let x of ive){
  console.log(x);
}
console.log('for ~ in')
for(let x in ive){
  console.log(ive[x]);
}

// break : 현재의 블럭을 탈출
// continue : 아래를 실행하지 않고 블럭 계속 진행
//  return : 함수를 빠져나가기
// do ~ while / while

// 1 ~ 10 까지 회전하면서 5면 탈출
Number = 1  
do {                    
  if(numberj == 5) break;          
  console.log(Number);                            
  Number++
} while(Number < 10)                  