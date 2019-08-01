const veriler=[
    {
        id:1034,
        title:"Alışveriş listesi",
        description:"Bu bir alışveriş listesi",
        todo:["süt al","soda al"]
    }
    , 
    {
        id:1024,
        title: "Okunacaklar listesi",
        description:"Bu bir  okunacaklar listesi",
        todo:["kürk mantolu madonna","kaşağı"]
    }
    , {
        id:5000,
        title:"Oyun listesi",
        description:"Bu bir Oyun listesi",
        todo:["Dota2","Far lone sails"]
    }
    ,
    {
        id:1234,
        title:"Gezilecekler listesi",
        description:"Bu bir Gezilecekler listesi",
        todo:["Ankara","İzmir"]
    }
]

let yeniVeri={
    id:1344,
    title:"denemler listesi",
    description:"bu bir yeni liste",
    todo:["yemek ye","su iç"]
}

function pcallback(resolve,reject){

    const error=false;
    if (!error) {
        let sortedArray=veriler.sort((firstEl,secEl) => {
            return firstEl.id-secEl.id

        })
        sortedArray.pop()
        sortedArray.push()

        for(var i=0; i<3;i++){
           sortedArray.push(yeniVeri) 
        }
        sortedArray.forEach((item)=>{
            item.owner="Nurullah";
        })
        sortedArray=sortedArray.sort((firstEl,secEl) => {
            return firstEl.id-secEl.id})
        
        resolve(sortedArray);
       
    } else{
        reject("An error occured when proccessing data")
    }
}

var pormiseProcess=new Promise (pcallback);
pormiseProcess.then((response)=>{
    console.log(response);
    response.forEach((item)=>{
        console.log(item.owner);
        
    })
    
})