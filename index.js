function createPost (){
  // var pageTemplate = document.getElementById("page-template").value
  // var postTemplate = document.getElementById("post-template").value;

  var author = document.getElementById("author").value
  var title = document.getElementById("title").value
  var post = document.getElementById("post").value
  var main = document.querySelector("main")

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  
   var templateFn = _.template(pageTemplate);
   var postTemplateFn = _.template(postTemplate);
   var commentsTemplateFn = _.template(commentsTemplate)
  
   var pageHTML = templateFn ()
   var templateHTML = postTemplateFn({'author': author, 'title': title, 'post': post})
  
   
   main.innerHTML += pageHTML
   var postDiv = document.getElementById("posts");
   

   postDiv.innerHTML += templateHTML

}

function postComment(){
  
  // comment-template
  
}