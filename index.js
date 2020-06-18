document.addEventListener('DOMContentLoaded', function () {



    var todo = [];
    document.getElementById("buton").onclick = add;
    document.getElementById("button").onclick = storage;
    
    var i = 0;
    var cookie="";
    function add() {

        var da = document.getElementById("input").value;
        if (da.localeCompare("")) {
            todo.push(da);
            var para = document.createElement("p");
            var node = document.createTextNode(todo[i]);
            para.appendChild(node);
            var element = document.getElementById("div1");
            element.appendChild(para);
            var br = document.createElement("br");
            element.appendChild(br);


            i++;
            document.getElementById("input").value = "";
            localStorage.setItem(i.toString(),da);
            localStorage.setItem("nr",i.toString());
        }

    }
    function storage(){
        var counter=localStorage.getItem("nr");
        counter.toString();
        var char = "";
        for(var j=1;j<=counter;i++){
            var todo2 = localStorage.getItem(j.toString());
            char+=todo2+" "+"\n";

        }
        alert(char);



    }



});

