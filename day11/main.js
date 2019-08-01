//axios ile json veri çekme

/* axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
  console.log(response.data);
  let responseData = response.data;
  responseData.forEach(item => {
    console.log(item.title);
  });
});
 */
/* http durum kodları

100 >> Bilgilendirme
200 >> Sucsess
300 >> Size yönlendirme yapar
400 >> Client side hataları döner örneğin "404"
500 >> Server side sorunlara işaret eder
*/

// bodyleri çektik

axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  console.log(response.data);
  let post = response.data;
  post.forEach(item => {
    console.log(post.forEach((item)=>{
        console.log(item.body);
        
    }));
    
  });
});