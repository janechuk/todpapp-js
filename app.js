document.addEventListener("DOMContentLoaded", function(){


  let ul = document.querySelector("#lists")
  let form = document.querySelector("form")
  let input = document.querySelector('input[name="newTodo"]')
  let toggleForm = document.querySelector("#toggle-form")
  let spans = document.querySelectorAll("span")
  
  
  
  // this function creats a new list when u hit submitt
  form.addEventListener("submit", function(e){
    e.preventDefault();
  let li = document.createElement("li")
  let icon = document.createElement("i")   
  let newTodo = input.value;
  input.value = " " ;
    
  icon.classList.add('fas', 'fa-trash-alt');
  li.append(icon);
  ul.appendChild(li).append(newTodo);


  deleteTodo();
  })
  
  
  // // alternate function to delete todo if delete span is clicked.
  // function deleteTodo(){
  //     for(let span of spans){
  //       span.addEventListener ("click",function (){
  //         span.parentElement.remove();
  //         event.stopPropagation();
  //       });
  //     }}


  
  //function to delete todo if delete span is clicked.
  ul.addEventListener("click", function(e){
    if (e.target.tagName === "I"){
       e.target.parentElement.remove();
      }}
   )


      
      // event listener to linethrough list if clicked
      ul.addEventListener("click", function(e){
       if (e.target.tagName === "LI"){
          e.target.classList.toggle("completed")
          
         }}
      )
  
  
      
      //hides the input form,when pencil icon is clicked
      toggleForm.addEventListener("click", function(e){
          form.classList.toggle("toggleform")
      })
  
  //delete todo
  deleteTodo();
  
  
  

})

