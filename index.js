document.addEventListener('DOMContentLoaded', function () {



    var todo = [];
    document.getElementById("buton").onclick = add;
    
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

            



            



        }

    }
    function hmm(){
        alert(localStorage.il+" "+localStorage.todo);


    }



});

