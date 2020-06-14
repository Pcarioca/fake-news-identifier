 

   var todo = [];
   document.getElementById("buton").onclick = add();
   var i=0;
    
    function add(){
        alert("Am intrat in functie");
        var da=document.getElementById("input").value;
        todo.push(da);
        
        var para = document.createElement("p");
        var node = document.createTextNode(todo[i]);
        para.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(para);
        i++;
        
      


        


    
    }
   


