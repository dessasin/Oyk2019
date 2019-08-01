axios.get('https://jsonplaceholder.typicode.com/todos').then((response)=>{

    console.log(response);
    let data =response.data;
    let outPut=""
    data.forEach((item) => {
        outPut+=`
        <div>
        <h1>${item.title}</h1>
        <h3>Item id: ${item.id} User id: ${item.userId}</h3>
        <h5>${item.completed ? "Coplating State: "+"Yes":"Coplating State: "+"No"}</h5>
        </div>
        `
    
        
    });
    document.getElementById("postContainer").innerHTML=outPut;

})
