function AddToList(){
    var todoinput=document.getElementById("input");
    var todolists=document.getElementById("lists");
    if (todoinput.value!=="") {
        var newlist=document.createElement("li");
        todolists.appendChild(newlist);
        var contentli=document.createElement("span");
        contentli.textContent=todoinput.value;
        var button1=document.createElement("button");
        button1.textContent="done";
        var button=document.createElement("button");
        button.textContent="sil";
        newlist.appendChild(contentli)
        newlist.appendChild(button1)
        newlist.appendChild(button)
        newlist.classList.add("list-item")
        todoinput.value="";
        button.onclick=function(){
            this.parentElement.remove();
        }
        button1.onclick=function(){
            console.log(this.parentElement.children[0].style.textDecoration);
            this.parentElement.children[0].style.textDecoration="line-through"
        }
  }
}