var inside = document.querySelector(".insid")
var Menu = document.querySelector(".menu-part")
var Exit = document.querySelector(".exit")
Menu.addEventListener("click",function(){
    // inside.style.display="block"
    inside.style.left="0"
})
Exit.addEventListener("click",function(){
    // inside.style.display="none"
    inside.style.left="-60%"

})
// var collection = document.querySelector(".collectionn")
var container = document.querySelector(".collectionn")
var Search = document.getElementById("search")
var List = container.querySelectorAll("div")
// var EnterContainer = document.querySelectorAll("p")

 Search.addEventListener("keyup",function(){
  var  EnterText= event.target.value.toUpperCase()
    for(var i=0; i<List.length; i++){
        var name = List[i].querySelector("p").textContent

        if( name.toUpperCase().indexOf(EnterText) < 0){

            List[i].style.display = "none"
         }else{
            List[i].style.display = "block"

        }
    }
 }) 


// function check(event) {
//         EnterText= event.target.value.toUpperCase()
//         for(var i=0; i<List.length; i++){
//             var name = List[i].querySelectorAll("p").textContent

//             if( name.toUpperCase().indexOf(EnterText) < 0){

//                 List[i].style.display = "none"
//              }else{
//                 List[i].style.display = "block"

//             }
//         }
// }