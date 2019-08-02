var textbox=document.querySelector('input')
var button=document.querySelector('button')


button.addEventListener('click',()=>{
    window.alert("merhaba : "+textbox.value)
    textbox.value="";
})
textbox.value="";