/* // Alert
if (confirm("Are you sure ")) {
    console.log("Yes");
    
    
}else{
    console.log("No");
    
}

// kullanıcıdan veri almak
var input=prompt();
console.log(input);

// pencerenin hangi adreste olduğunu almak
console.log(location.href);

// window apileri araştır
 */

// dom ağacından id ile eleman çekme
/*  var honeID=document.getElementById("title")
 console.log( document.getElementById("title"));

 console.log(honeID.className);
 
 */


 // sınıf adına göre nesneleri çekmek
 /* console.log(document.getElementsByClassName("someClass"));
 console.log(document.getElementsByName("title"));
 console.log(document.getElementsByTagName("h1"));
 
  */
/*  document.querySelector(".someClass") // someclass sahibi bütün elementleri getirir
 document.querySelector("#title") // title id sahip bütün elementleri çeker

 */


 var titleQuery=(document.querySelector("#title"))

 console.log(titleQuery);
 
/* 
  titleQuery.forEach((item)=>{ // for fun 
     item.style.background='red'
 })  */

 titleQuery.textContent="HEllleooeoo"

 