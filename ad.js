//                      ////**** */ ALeRT CHP 1 /////

// alert( " hello adnan")

// ////////////*** */ chp 2 veriable string //////

// var fullName = " adnan sami"
// alert(fullName)
// fullName = ' khan '
// alert( fullName)

// var karate = " sami kjan"
// var www =' karete '+ 'sami lkjan'
// alert( www)

// ////// ***** chp 3    veriable number /////

// var num = 22
// alert(num)


// var num = 6
// var inc = num + 6
// alert( inc)

// var num = 55 
// var dec = num - 33
// alert(dec)

// ///////////////// ***** chp 4  veriable name ligal and illegal /////////////
// // don,t use frist number . number use after ther letter .

// // var ist  << is not use 
// // it use 
// var num1 = 777
// alert(num1)



// ////// ***** chp 5 ///   math expression famillar opretor ///////
// var num = 4
// num1 = num +4 
// console.log(num1)
//  var num = 7
//  num2 = num * 7
//  console.log(num2)


//  var fullName = ' adnaan\n sami'
//  alert( fullName)


 
// //////// *****  chp 6   math expression unfamillar opretor ///////////////

// var s = 3
// var h = 5
// var c = s++ - h++
// console.log ( c)


// var a =8 
// var  b = ++a + 8
// console.log( b)
 

/////// ***** chp 7 math expression eliminting ambiguity ////// 


// var a = 6+ ( 3 +9 )
// console.log( a)



//  var a = 4
//  b= 3
//  c = a++ - ++b + ++a - --a 
//  console.log( c)
   

//  var a =  4 
//  b = 4
//  c= a * ( b *a) - b % a 


//  console.log(c)



 ///// ******chp 8 concatenating text string /////

//   var a = "4" + 4
//   console.log(a)

//    var fristname=  "muhammad"
//        lastName = "Adnan"
//        fullName = fristname + " " + lastName
//        console.log(fullName)



////////****** */ chp 9 promt //////

// var fristname=  prompt( 'enter your frist name ' ,' adnan') 
// lastName = prompt( 'enter your last name')
// fullName =' mr.' + fristname + " " +lastName
//        console.log(fullName)


/////***** */         chp 10 if statement //////
    
// var gender = prompt( 'enter your gender', 'male')
// massage = 'not match'
// if( gender===  "male") {
// massage= 'hello si'
//  }
// if ( gender=== "female") {
//     massage=' hello sis'
// }

// alert( massage)

/////  *******   chp 11 comparison operator ///////
 //  (=== ==! ==)   will discuss 


//  var eduction = prompt( 'enter your education ')

//  if( eduction !==  'metric' ){
   
// console.log('ELIGIABLE' )
//  }

////  ******** if .... else and else if statement chp 12 ////


// var age = 20 
// if( age=== 21 ){
//     console.log( 'allowed')
// }
// else{
//     console.log( 'not allow')
// }

// var adnanEkKomKro = prompt(  "kam kia hee") or be laga skty he (&&)
// if( adnanEkKomKro=== "udar chahiyee" ) {
//     console.log("ap k pass hee")
// }
// else if (adnanEkKomKro === 'kuch be ho') {
//     console.log( 'inkar mt krna')

    
// }
// else{ 
//     console.log('nhi he')
// }
 ////    ***chp 13   //// TESTING  SET OF CONDITION //// +promt() is called number//
 //*****chp 14 if nasted statment//


  // var language = prompt( 'enter your language ')
  // if( language=== 'javasricpt'){
  //   var city = prompt( 'enter your city')
  //   if( city==='peshawar'){
  //  var expriance= prompt( 'entr youer  exp'  )
  
  //   if(expriance==='4'){
  //       console.log( 'congrats u harid')

  //   }else{
  //       console.log( 'bare ho k ao ')
  //   }
  //   }else{
  //       console.log( 'peshawar ao')
  //   }
  // }else{
  //   console.log( 'javasricpt sekao')
  // }

// var student= prompt( 'enter ?')
// if( student=== '11'||'23' ){
//   console.log( 'ri8')
// }else{
//   console.log('worng')
// }
//  var userName = prompt(' entr youer ') || 'not provied'
//  console.log(userName)

//  var userName = prompt(' entr youer ') 
//  var isAvailable= userName &&'yes'
//  console.log(isAvailable);
//  ;


          /// ***chp 15 arrays////

  //         var student = [ 'adnan','khan','ali'
  //     ]
  // console.log( student)
  // console.log( student[1])

/////*** */ chp 16 ARRAYS
  // adding and removeing element//.

//  var student =[' ali', 'adnan', 'khan']
//  student[3]= 'asim'
//  console.log(student)
 
//  var student = []
//  student [student.length]= 'adnan'
//  student [student.length]= 'khan'
//  console.log( student)

//  ///**pop and
//  var student = [ 'adnan','sami','khan']
//   var returnValue = student.pop()
//   console.log(returnValue)
//   console.log(student)
// //** */ push //
//   var student = [ 'adnan','sami','khan']
//   var returnValue = student.push('saleen','saqeb')
//   console.log(returnValue)
//   console.log(student)

////*****chp 17  ARRAYS  REMOVING, INTRESTING AND EXTRACTING ELEMENTS******

// SHIFT AND UNSHFIT



// var student = [ 'adnan','sami','khan']
// var returnValue = student.splice(0,1,"khan",)
// console.log(student)
// console.log(returnValue)


// var student = [ 'adnan','sami','khan']
// var copyArr = student.slice(0,1,)
// console.log(student)
// console.log(copyArr)



// var student = [ 'adnan','sami','khan']
// var copyArr = student.slice(1)
// console.log(student)
// console.log(copyArr)


// var student = [ 'adnan','sami','khan']
//  var copyArr =student.slice(-1)
// console.log(student)
// console.log(copyArr)


//// *****chp 18 for loops ****////
// var test = "hello"
// for( var i=1; i<=5 ; i++) {
//   console.log('texr', i , test) 
// }

// var students = [ "ali","khan","sami","asim"]
// for( var i = 0; i<students.length; i++ ) {
//   console.log( students[i])
// }
// 

// var table = 3
// for( var i =1; i<=10; i++){
//   console.log(" table===>>",table + "x" + i + "="+ table*i)
 
// }

//// ****chp 19 for loops falge boolean arrys lenght  loops interupte****///


// var cities = [ "peshawar", "kohat","mardan","charsada"]
// var flage = "no";
// for( var i=0; i <cities.length; i++) {
//   if(cities[i]==="peshawar" ){
//   flage= 'yes';
//   console.log("mel giya") 
//   break;
// }
// }
//   if( flage==="no"){
//    console.log("nhi mela")
//   }
  // var pelidrium = [ "maham","kaka","lala"]
//   var flage = "no"
// for( var i=0; i < pelidrium.length; i++) {
//   if( pelidrium[i], prompt( )){
//     console.log( "yes ")
//     break;
//   }
// }
      // if( flage==="no"){
      //   console.log("no")
//       // }
// var arr =[ 3,45,56,6,1,6,6,6,]
// var main= arr[0];
// for( var i = 0; i<arr.length; i++){
// if( arr[i] > main) {
//   main = arr[i];
// }
// }
// console.log(main)

// var arr = [ "a","b","c"]
// console.log( )

//// *** chp 20 nasted loop ****////

// var cities =[ [7,75,,5,5,5,5,5,5], [5,5,5,5,5,5,5,5,5,5],];
// for ( var i = 0; i<cities.lenght; i++){
//   for( var j =0; j<cities[i].length; j++){
//    console.log( cities[i][j])
//   }

// }

// var arr = [[ "adnan","khan"],["sami","jan",]]
// for(var i = 0; i<arr.length; i++){
//   for(var j =0; j<arr[i].length; j++){
//     console.log(arr[i][j])
//   }
// } 
 /////***** changing case chp 21***** */

// var cities = prompt()
// console.log( cities.toUpperCase())

// var cities = prompt()
// console.log( cities.toLowerCase())
///**** CHP 22  STRING MEAURING LENGHT EXTERACTING PART***** */
 
// var fullName= "adana"
// var fristChar= fullName.slice(0,1).toUpperCase()
// var result = fristChar+fullName.slice(1)
// console.log(result)


// var fullName = "khan"
//  var fristChar = fullName.slice(0,1).toUpperCase()
//  var  rusult = fristChar + fullName.slice(1)
// document.write(rusult)

//////***** */ string findiing sagments  chp 23*****///

// var text = "my is adnan khan"
// for( var i =0; i < text.length; i++) {
//   console.log( text.slice(i, i+4)==="khan")
// }


// var text = "adnan khan  "
// var user = prompt(" write something");
// for( var i=0; i< text.length; i++){
//   if( text.slice( i,i+ user.length)=== "user" ) {
//     console.log("milgia");
//   }
// }






//////***** string finding character at a location chp 24 ****** */

// var text = "adnan" [4]

// console.log( text)

// var text = "khan"
// var add = text.charAt(3)
// console.log(add)



////// *******string replacing character chp 25********

// var str ="adnan  khan " ;

// console.log( str.replace("adnan, sami"));


// var fullName = "adnan"
// var fristChar= fullName.slice(0,1).toUpperCase()
// var result = fristChar + fullName.slice(1)
// console.log(result)



// var str = "adnan, khan,jsg,hdhdu,"
// console.log(str.replaceaAll("adnan","jjjjj","ggg","adnan"))

/////****chp 26 rounding number  */
// var number= 888
// console.log( Math.round(1.9))

// console.log(Math.ceil(2.1))
// console.log(Math.floor(2.9))

//////**** gentreating ramdom number chp 27**** */

// var ramdom =Math.floor( Math.random() *10)
// console.log(ramdom)

////chp 28*********//////// 


// var result = parseInt( "333")
// console.log(result)

// var hum = "88888"
// console.log(hum.number())


////*****chp 29 **** converting string to number numbr to string */



// var num = 55555
// console.log( num.toString())
 
////// ********chp 30 &*******controlling the linght of desimal/////



// var num= 7.6666
// console.log(num.toFixed(2))

// var hun = 4.55
// console.log(hun.toFixed(5))


/////// chpp ******31 curent date and time *****

// var date = new Date()
// console.log(date)
//  var date = new Date()
//  console.log(date.toString().slice(0,16))

 
// var date = new Date()
// var dayName = [ "sun","mon","tus","wed","fri","sat"]
// console.log(date.getDay())


///// chp 33 specifing A date and time **********////


// var fristRamadan =new Date("1 3 2025")
// var toDay= new Date()
// var diff = fristRamadan.getTime() - toDay.getTime()
// var day = diff/ (1000 * 60 * 60 * 24 )
// var month = diff / ( 1000* 60 * 60 *24 * 30 )
// console.log(Math.round(day))
// console.log(Math.round(month))

// var age = new Date( "10 2 2002")
// var toDay = new Date()
// var diff = toDay- age
// var year = diff / ( 1000* 60 * 60 * 30 * 365)
// console.log(year)

// var date = moment().format("M")


////// 34 **********

// var date = new Date()
// date.setFullYear(2002)
// date.setMonth(1,10)

// console.log(date)

////// chp 35 **** functions*************
// function adnan() {
//   console.log("hi");
//   }
//   function khan () {
//     console.log("hell");
//   }
  
// khan ();
// adnan();


// function abc(name){
//   console.log("sanga ye kher s");

// }
// abc();
///// chp 36 ****** function then data pass*****************

// function xzy(a,b,c){
//   console.log(a,b,c);

// }
// xzy("hi sir" ,7777,true);
// var arr = []
// function mypush(value){
//   arr[arr.length]= value;

// } mypush("hi sir");
// console.log(arr);

// var arr=[]
// function mypush(Value){
//   arr[arr.length]=Value;

// }

// mypush("adnan")
// console.log(arr)

// var arr= [ 'adnan']
// function mypush(Value){
//   arr[arr.length]= Value;

// }
// mypush('khan')
// console.log(arr)


//  function printName(name){

// if( name){



//   document.write(name);

// }
// }
//  var name = prompt( 'entr');
//  printName(name);


////////// chp 37 ******* functions: passing data from them*******

// function abc(a,b){
//   return a+b;
// }
// console.log(abc(17,9) +5);
// console.log(abc(17,9) +6);
// console.log(abc(17,9) +8);
// console.log(abc(17,9) +50);
// console.log(abc(17,9) +7);

// function joo(){
//   var abc= "khan";
// return abc;
// }
// console.log(joo);


// function submitForm(){
//   var name = document.getElementById("name");
//   var email = document.getElementById("email");
  
//   // console.log(Boolean( name.value),name.value);
//   // console.log(Boolean(email.value));

//   if(name.value.trim() && email.value.trim()){
   

//   console.log(name.value);
//   console.log(email.value);

//   name.value= "";
//   email.value="";
//   }else{
//     console.log("pla enter nmae")

//   }
// }


////// chp 39...... switch statment how to start them

// var day = "fri"
// switch (day){
//   case "fri":
//     alert(1)
//     break;
//     case "sun":
//       alert(2)
//       break
//       default:
//         alert("default")
// }

// let day = "monday"
// switch(day){
//   case" monday":
//   console.log("to day is monday")
//   break;
// }
// var day = 4 
// switch (day) {
//   case 0:
//   document.write("toDay is monday")
    
//     break;
//     case 1 :
//     document.write("thu")
//     break;
//     case 3 : 
//     document.write("tttt")
//     break;

//   default: 
//   document.write('no day')
//     break;
// // }
// var a = 20;
// switch (true) {
//   case(  a >= 15 && a <= 20 ):
//   alert("you are eligibal");
//  break;
//  case( a >= 21  && a<= 25 ):
//  alert("you are not eligibal");
   
// break;
//   default:
//     alert( "a vild");
//     break;
// }

// chp Events Fields // 48********************************


//  function makeFieldYellow (element){
//   element.style.backgroundColor='yellow'
//  }

// function makeFieldWhite (element){
//   element.style.backgroundColor='white'
// }

//  chp 49 reading field values *******????????

// function submit(){
//   var test = document.getElementById('test')
//   console.log(test.value)
// // }
// function submit(){
//   var radio= document.getElementsByName("gender")
//  for(var i=0; i<radio.length;i++){
// if( radio[i].checked){
 
//   console.log(radio[i].value)
// }
//  }
// }

// chp 50///

// function validateName(){
//   var frist_name = document.getElementsById('frist_name')
//   if(frist_name.value){
//     frist_name.style.border= "2px solid red"
//   }
// }

// // 51
//  var heading= document.getElementById("heading");
// heading.innerHTML = "adnan"

function submit(){

var frist_name= document.getElementById("frist_name")
var last_name = document.getElementById("last_name")
heading.innerHTML= frist_name.value +" "+last_name.value
}




































