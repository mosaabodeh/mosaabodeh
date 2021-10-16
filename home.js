console.log('hello')
var someage=45;
console.log(someage);
//var age = prompt('what is your age ?');
//document.getElementById('sometext').innerHTML=age;
//number in js 
//var num =9 ;
//num ++;
//num--;
//num+=15
//console.log(num*7)
//functions 
//
function fun (){
    console.log('hi from function')
}
//call the function : 
fun();
function  greatfun(){ 
    var name=prompt('what is your name ? ')
var result='hello'+' '+name;//string concatenation 
console.log(result);
}
greatfun();
function greatfun(num1,num2){
   var  result=num1 +num2
    console.log(result)
}
greatfun(10,15)
//while loop
var a=0
while (a<100) {
    a+=1;
    console.log(a)
}
//for loop 
for (let i=0;i<6;i++){
    console.log(i)
}
