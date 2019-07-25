// Variables(değişkenler)

var foo = 12; //number

console.log(foo);

var numb = 1.4;
console.log(foo);

var text = "asfas";
console.log(text);

var myArray = [2, 5, 1, 5, 66, 231, "deneme"] // dizizlerde tip sınırlaması yok

console.log(myArray);

console.log(myArray[1]); // dizinin index elemanı

console.log(myArray[6].length); // dizideki nesnenin uzunluğu
console.log(myArray.length); // dizinin uzunluğu


var myObj = {
    id: 1,
    post: 'Lorem ipsum'
}


console.log(myObj.id);
console.log(myObj.post);

var besin = {
    meyve: ['elma', 'armut', 'cilek'],
    sebze: ['patates', 'sarımsak', 'sogan']
}

console.log(besin.meyve[2]);
console.log(besin.meyve);

// obje içinden alınan elemanın değerini değişkenine atama
// bu durum herhangi bir değişkenin obje içinden çekerek de alınabilir
var harf = besin.meyve[2][2];

console.log(harf);