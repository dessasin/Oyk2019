var tryObj = [
  {
    yapilacak: "Yemek ye",
    eylem: "Yemek Yemek",
    durum: false
  },
  {
    yapilacak: "Dota Oyna",
    eylem: "Oyun Oynamak",
    durum: true
  },
  {
    yapilacak: "Footer Kısmını Yaz",
    eylem: "Kodla",
    durum: false
  },
  {
    yapilacak: "Yürü",
    eylem: "Parka Git",
    durum: true
  },
  {
    yapilacak: "Koyunlara Yem Ver",
    eylem: "Koyunları Yemle",
    durum: true
  },
  {
    yapilacak: "Biletall'dan Bilet Al",
    eylem: "Sipariş ver",
    durum: false
  }
];

let addedObj=
  {
    yapilacak: "",
    eylem: "",
    durum: false
  }


let ekleBtn=document.getElementById('btnEkle')
let yapilacakTxt=document.getElementById('yapilacakTxt')
let eylemTxt=document.getElementById('eylemTxt')
let durumSelect=document.getElementById('trueFalse')



function addObjValue(){
    addedObj.yapilacak=yapilacakTxt.value;
   // addedObj.durum=durumSelect.value
    addedObj.eylem=eylemTxt.value
    addedObj.durum=durumSelect.value =="false" ? true : false
    
    
}

function listele(){
  for (const objs of tryObj) {
    let yDurum=objs.durum 
    let yEylem=objs.yapilacak
    let yIs=objs.eylem
    
    
    let li =document.createElement('li');
    li.className='listItem';
    li.id='idlist';
    li.setAttribute('title' ,'new li');
    if (!yDurum){
        li.appendChild(document.createTextNode(yIs+" : "+yEylem))
        document.getElementById('done').appendChild(li)
    }
    else{
        li.appendChild(document.createTextNode(yIs+" : "+yEylem))
        document.getElementById('notDone').appendChild(li)
    }
    
    
}
}
listele()

ekleBtn.addEventListener('click',(event) => {
    addObjValue()
    tryObj.push(addedObj)
    listele()
    console.log(tryObj)
    

})