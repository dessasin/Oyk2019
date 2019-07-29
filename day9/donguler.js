/* while (true) {
    console.log("sdf");
    
}
 */
/* var x=11;
 do {
     console.log("dfsdf");
     
     
 } while (x<10); */

 // örnek

 /* var result ="";

 var i =0;

 do {
     i=i+1;
     result=result+i;
     
 } while (i<5);
 console.log(result);
  */

/* 
  for (let i = 0; i < 10; i++) {
      console.log(i);
      
      
  } */
/* 
var dizi=[1,2,3,4,5,6,7,8,9]
  dizi.forEach(function(i){
      console.log(i);
      
  }); */

  // soru 

  /* obje tanımlanacak 3 tane key-value içerecek 
    keyvalue;
    number 
    string
    array

    array içinde 2 array daha içerecek biri string diğeri number içerecek
    bu arrayleri foreach uygulayarak indexleri ile beraber ekrana bastıracağız

  */
/* var arraStr;
var arraNum;
  var obj={
      objNum:12345,
      objStr:"ben bir stringim",
      objAr:[
          [1,2,3,4,5,6,7,8,9],
          ["a","b","c","d","e","f","g","h","i"]
      ]
  }
for (let i = 0; i < obj.size; i++) {
    if (typeof(i)=="object") {
        console.log(i);
        
        for (let j = 0; j < i.length; j++) {
           if (typeof(j)=="string"){
               arraStr=j;https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Errors/Not_a_function?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default
               
               arraStr.forEach(function(strarg){
               console.log(strarg)
               });
        
           }else if(typeof(j)=="number")
            arraNum=j;
            arraNum.forEach(function(numarg){
                console.log(numarg)
                
            });
        }
    }
    
} */