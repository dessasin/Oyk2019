var obje = {
    key1: 3,
    key2: "yazi",
    key3:[
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

  console.log(obje);
  
  //objelerin içeriklerini çeken blok
  console.log(Object.keys(obje));
  console.log(Object.values(obje));

  //objelerin içeriklerini dizi ile çekiğimiz verilerin uzunluğunu ölçüyoruz
  console.log(Object.keys(obje).length);
  console.log(Object.values(obje).length);

  // obje keylerinin içeriklerini çektiğimiz blok
  console.log(Object.values(obje)[0]);
  console.log(Object.values(obje)[1]);
  console.log(Object.values(obje)[2]);

// obje keylerini üst bloktaki gibi amele işi çekmek yerine for ile tek seferde ve adım bağımsız çekiyoruz 

/*<< 
for (var i=0;  i< Object.keys(obje).length; i++) {
    
}

<<*/

// obje keylerini çektikten sonra her bir keyin tiplerini tip değişkenine atıyoruz ki aşağıda tipleri kontrol edelim

/*<<

for (var i=0;  i< Object.keys(obje).length; i++) {
    let tip = typeof(Object.values(obje)[i])// her bir key içerisindeki değerin tipini atıyoruz
    
}

<<*/

// if ile obje içerisinden value tipi objeye eşit olanı kontrol ediyoruz ve key değişkenine objenin keylerini atıyoruz

/*<<

for (var i=0;  i< Object.keys(obje).length; i++) {
    let tipler = typeof(Object.values(obje)[i])
    if(tipler=='object'){
        let key=obje[Object.keys(obje)[i]]

    }
}

<<*/

/*
 key içeriği obje olanı yakaladık ve onun dizi olduğunu biliyoruz 
bu bilgi ile bu blokta eklenen 2. for ile keylerin sayısı kadar dönüyoruz.
Ardından keylerin içeriklerini a1 değişkenine atıyoruz ki ileride yazdıralım
*/

/*<<

for (var i=0;  i< Object.keys(obje).length; i++) {
    let tipler = typeof(Object.values(obje)[i])
    if(tipler=='object'){
        let key=obje[Object.keys(obje)[i]]
        for(var j=0;j<key.length;j++){
            let a1=Object.values(key)[j]

        }

    }
}
<<*/

/*
bu blokta eklenen for ile 2 kez dönecek şekilde çalışıyoruz ve 
üst bloklardan toplanarak gelen değerleri en son a1 değişkenine atamıştık
deger değişkenine a1 ile gelen verilerin keylerini de değere atıyoruz
değere atama işlemi aynı zamanda a1 den geln verileri diziler halinde bize döndürüyor
*/

/*<<
for (var i=0;  i< Object.keys(obje).length; i++) {
    let tipler = typeof(Object.values(obje)[i])
    if(tipler=='object'){
        let key=obje[Object.keys(obje)[i]]
        for(var j=0;j<key.length;j++){
            let a1=Object.values(key)[j]
            for (var i = 0; i < 2; i++){
                let deger =a1[Object.keys(a1)[i]]
            }

        }

    }
}
<<*/

/*
artık değerlerimizi diziler halinde çektik ve ekrana yazdıracağız
diziler halinde aldığımız değerleri değişkenimiz olan 
deger dizilerinden foreach ile sıra sıra çekerek log kısmında ekrana yazdırıyoruz
*/

for (var i=0;  i< Object.keys(obje).length; i++) {
    let tipler = typeof(Object.values(obje)[i])
    if(tipler=='object'){
        let key=obje[Object.keys(obje)[i]]
        for(var j=0;j<key.length;j++){
            let a1=Object.values(key)[j]
            for (var i = 0; i < 2; i++){
                let deger =a1[Object.keys(a1)[i]]
                deger.forEach(function(value,index){

                    console.log("index: "+index+" "+"value"+value);
                    
                });
            }

        }

    }
}



