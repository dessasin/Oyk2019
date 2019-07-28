const posts = [
  {
    title: "Baslik 1",
    body: "Lorem ipsum 1"
  },
  {
    title: "Baslik 2",
    body: "Lorem ipsum 2"
  }
];

/* function getPosts() {
    console.log(posts);
    
}

function createPost(post) {
    setTimeout(()=>{
        posts.push(posts)
    },1000)  
}

createPost({title:"Baslik 3",body:"Lorem ipsum 3"})

getPosts() */

/* function getPosts() {
  console.log(posts);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
}

createPost(
  {
    title: "Baslik 3",
    body: "Lorem ipsum 3"
  },
  getPosts
);
 */

 /* 
 function updatePost(upPost){
     upPost.title= "Baslik Degisti"
     upPost.body= "Lorem Degisti"

 }

 function updatePostWithout(){
    

}
function getPosts() {
    console.log(posts);
  }
  
  function createPost(post, callback,callbacktwo,callbackend) {
    setTimeout(() => {
      posts.push(post);
      callbacktwo(posts[0])
      callbackend(posts[1].title="Baslik Degisti",posts[1].body="Lorem Degisti")
      callback()
      
    }, 1000);
  }
  
  createPost(
    {
      title: "Baslik 3",
      body: "Lorem ipsum 3"
    },
    getPosts,updatePost,updatePostWithout
  );
 */


/* 
function updatePost(upPost){
    upPost.title= "Baslik Degisti"
    upPost.body= "Lorem Degisti"

}

function updatePostWithout(){
   

}
function getPosts() {
   console.log(posts);
 }
 
 function createPost(post, callback,callbacktwo,callbackend) {
   setTimeout(() => {
     posts.push(post);
     callbacktwo(posts[0])
     callbackend(posts[1].title="Baslik Degisti",posts[1].body="Lorem Degisti")
     callback()
     
   }, 1000);
 }
 
 createPost(
   {
     title: "Baslik 3",
     body: "Lorem ipsum 3"
   },
   getPosts,updatePost,updatePostWithout
 );
 */

 