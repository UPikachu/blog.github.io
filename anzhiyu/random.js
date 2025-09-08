var posts=["posts/4a17b156/","posts/3bf4a27/","posts/7fefb892/","posts/74fda535/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };