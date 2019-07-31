/* const posts = [
    {
      title: "Baslik 1",
      body: "Lorem ipsum 1"
    },
    {
      title: "Baslik 2",
      body: "Lorem ipsum 2"
    }
  ];


function getPosts() {
    console.log(posts);
    
}

function createPost(post) {
    console.log("Suan promise işlemleri çalışıyor");
   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(posts)
            const error=true;
        if (!error) {
            resolve("ben artık resolve ettim")
        }else{
            reject("Rejected ")
        }
        },1000)
        

    })
    
     
}

createPost({title:"Baslik 3",body:"Lorem ipsum 3"}
).then((response)=>{
console.log(response);
getPosts()

}).catch((e)=>{console.log(e);
})

 */

 // let x= 1
// while (x <= 3) {
//   ++x;
//   console.log("bastım");
// //  console.log(x);
// }
// console.log("girmedi");

// var result = "";
// var i = 0;
//
// do {
//   i++;
//   result = result + i;
// } while (i < 0);
//
// console.log(result);
/*
var i;
var dizi = [1,2,3,4]
for (i = 0; i < dizi.length; i++) {
console.log(i + ". index: " + dizi[i]);
}*/
/*
var dizi = [1,2,3,4]
var dizi2 = [5,6,7,8]
dizi.forEach(function (deger, deger2, deger3) {
console.log("value: " + deger +"\n" +"index: " +
deger2 +"\n" + "array: " + deger3);

})*/

var obje = {
    key1: 3,
    key2: "yazi",
    afsafsa:[
      {
        array1:[1,2,3],
        array2: ["a","b","c"]
      },
      {
        array1:[4,5,6],
        array2: ["d","e","f"]
      }
    ]
  }
  /*
  once hangisinin array oldugu bulunacak
  array icindeki objeye girilip 2 arrayı
  foreach ile index : value olarak consola bastır
  */
  
  
  console.log(Object.keys(obje).length);
  for (var i = 0; i < Object.keys(obje).length; i++) {
    let tip = typeof(Object.values(obje)[i])
    console.log("tipi :" + tip);
    console.log("-----------");
    if(tip == 'object'){
      let key = obje[Object.keys(obje)[i]]
      console.log("keyin valuesu: " + key);
      console.log("------");
      console.log(key.length);
      for (var j = 0; j < key.length; j++) {
        let a1 = Object.values(key)[j]
        console.log("------");
        console.log(a1);
        for (var i = 0; i < 2; i++) {
          let deger = a1[Object.keys(a1)[i]]
          console.log("------");
          console.log(deger);
          deger.forEach(function (value,index){
            console.log("index: " +index +", " +
             "value: " + value)
          }
        )
        //console.log("------------");
      }
    }
  }
  }
  