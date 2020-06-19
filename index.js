document.addEventListener('DOMContentLoaded', function () {


    //Restabileste TO-tu-urile din localStorage.


    var count=localStorage.getItem("nr");
        
        count=parseInt(count,10);

      

        
        
        var char2 = "";
        var todo3 = "";
        for(var k=1;k<=count;k++){
            todo3 = localStorage.getItem(k.toString());
            
            var para = document.createElement("p");
            var node = document.createTextNode(todo3);
            para.appendChild(node);
            var element = document.getElementById("div1");
            element.appendChild(para);
            var br = document.createElement("br");
            element.appendChild(br);





            
        }



    //sfarsit






    var todo = [];
    document.getElementById("buton").onclick = add;
    document.getElementById("button").onclick = storage;

    var i = 0;
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
        
        counter=parseInt(counter,10);

        //pana aici e ok

        
        
        var char = "";
        var todo2 = "";
        for(var j=0;j<=counter;j++){
            todo2 = localStorage.getItem(j.toString());
            char+=todo2+"\n";



        }
        alert(char);



    }

    



});

