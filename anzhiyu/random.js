var posts=["2025/08/29/hello-world/","2025/08/29/文章标题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };