/* var obj={
key0:"yazi",
key1:"asfa"

}

// for in ve for off şeklinde iki döngü var

// for in objelerde kullanılır ve objenin içeriklerini otomatik çekmeye olanak sağlar
for (var key in obj) {
    console.log(key);
    
}


//for of dizilerin içeriklerini direkt olarak çeker

let dizi=[1,2,3,4,5,6]

for (index of dizi) {
    console.log(index);
    
    
}

 */

 // dizilerde map metodu

 let dizi=[1,2,3,4,5,6,124,5,3,41,23,4,23,5,235,45]

 let yDizi=dizi.filter((item,index)=>{
     if(index<5){
         return true
     }
 }).map((item)=>{
     return item+=5
 })

console.log(yDizi);
