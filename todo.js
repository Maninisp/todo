function add(){
    var item = document.getElementById("item").value;

    if (item.length < 28){
    var div = document.createElement("div");
    div.className = "newit";
    var t = document.createTextNode(item);
    var button = document.createElement("button");
    button.innerHTML = "X";
    button.className = "close";
    button.addEventListener("click", del);
    function del(){
        var div = this.parentElement;
        div.parentNode.removeChild(div);
    }
    div.appendChild(t);
    div.appendChild(button);

    document.getElementById("display").appendChild(div)

   document.getElementById("item").value = "";
   }

   else{
    alert("max. 28 characters only");
   }

}
// var item = document.getElementById("item").value;
// if (item.length> 28){
    
    

// }

// function add() {
//     var x = document.createElement("div");
//     var tk = document.getElementById("item").value;
//     var t = document.createTextNode(tk);
//     x.appendChild(t);
//     document.getElementById("myList").appendChild(x);
//   }