var posts=["posts/58888ec3/","posts/7fefb892/","posts/4a17b156/","posts/74fda535/","posts/3bf4a27/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };