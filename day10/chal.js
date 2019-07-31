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

  for (var i = 0; i < Object.keys(obje).length; i++) {
      let tip = typeof(Object.values(obje)[i])
      if(tip =='object'){
          let key=obje[Object.keys(obje)[i]]
          for(var j=0;j<key.length;j++){
              let a1=Object.values(key)[j]
              for (var i = 0; i < 2; i++) {
                  let deger =a1[Object.keys(a1)[i]]
                  deger.forEach(function(value,index){

                    console.log("index: "+index+" "+"value"+value);
                    
                      
                  });
              }

          }
      }
      
  }