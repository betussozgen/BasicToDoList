let addToDoButton = document.getElementById("addToDo")//id'si addToDo ya ulaşabiliyorum. 
let toDoContainer = document.getElementById('toDoContainer')
let inputText = document.getElementById('inputText')
let clearToDo = document.getElementById('clearToDo')

addToDoButton.addEventListener('click', function(){

    let paragraph = document.createElement('p') //paragraf oluşturuyorum.
    paragraph.classList.add('paragraph-styling');//yazılan yazılar css li şekilde gelsin.
    toDoContainer.appendChild(paragraph) //oluşturduğum paragrafı toDoContainer içine aktar.
    paragraph.innerHTML  = inputText.value; //paragrafın içerisine inputText'in value'sını atıyorum.
    inputText.value = "";//atadıktan sonra text in içini temizledim.


    //paragrafın üzerine tıklandığında;
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through' //üstünü çiziyor.

    });

    //paragrafa ikinci tıklanışında;
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);// eklenen paragrafları sil.
    });

   //clear butonuna tıklamdığında;
   clearToDo.addEventListener('click', function(){

    //paragraph.style.display = 'none'
    paragraph.remove();

   })


}) //click olduğunda function çağırıyorum.

