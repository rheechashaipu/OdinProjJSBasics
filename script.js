//Project Euler, Problem 1
// https://projecteuler.net/problem=1

var multiplesSum = 0;

for(i=0;i<1000;i++){
	if(i%3 === 0){
		multiplesSum+=i;
	} else if(i%5 === 0){
		multiplesSum+=i;
	} else if(i%5 === 0 && i%3 === 0){
		multiplesSum+=i;
	}
}

console.log(multiplesSum);