document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("input").onkeypress = tasta;

    if (localStorage.getItem("nr") == null || localStorage.getItem("nr") == undefined)
    /* Daca utilizatorul nu a mai folosit platforma TO-do, atunci
     *@getItem("nr") ar trebui sa nu existe deci sa initializeze i cu 0;
     *altfel, ar trebui sa aiba o valoare sub forma de String si sa continue
     *de unde a ramas cu numaratoarea.
     */ { i = 0; }
    else { i = parseInt(localStorage.getItem("nr"), 10); }


    console.log("prima data i=" + i);
    console.log("parseInt(localStorage.getItem('nr'),10)=", + parseInt(localStorage.getItem("nr"), 10));
    console.log("localStorage.getItem('nr')=" + localStorage.getItem("nr"));

    //  !!  Restabileste TO-do-urile din localStorage.  !!  (functioneaza perfect)(sau lasa)


    var count = parseInt(localStorage.getItem("nr"), 10);



    var char2 = "";
    var todo3 = "";
    for (var k = 1; k <= count; k++) {
        console.log(" in primul for k=" + k);
        todo3 = localStorage.getItem(k.toString());
        if (todo3 == null) continue;
        console.log("localStorage.getItem(k.toString())=" + localStorage.getItem(k.toString()));
        var para = document.createElement("p");
        var node = document.createTextNode(todo3);
        para.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(para);
    
        var unde = document.getElementById("remover");
        para.setAttribute("id","p"+k.toString());

        var br = document.createElement("br");
        element.appendChild(br);
        br.setAttribute("id","br"+k.toString());
        br.setAttribute("class","br");
        


        var RemoveBTN = document.createElement("button");
            var minus = document.createTextNode("-");


            var unde = document.getElementById("remover");
            RemoveBTN.appendChild(minus);
            unde.appendChild(RemoveBTN);
            RemoveBTN.setAttribute("id","button"+k.toString());
            RemoveBTN.setAttribute("class","minus btn-block btn"); 
        
    }
       






    var todo = [];
    document.getElementById("buton").onclick = add;
    document.getElementById("button").onclick = storage;
    document.getElementById("vanish").onclick = vanish;




    function add() {
        if (localStorage.getItem("nr") == null || localStorage.getItem("nr") == undefined)
            i = 1;
        else
            i = parseInt(localStorage.getItem("nr"), 10);

        console.log("i in add()=" + i);


        var da = document.getElementById("input").value;
        if (da.localeCompare("")) { //functia se executa doar daca am bagat text propriu-zis


            todo[i] = da;//introdu variabila in vector
            var para = document.createElement("p");//creeaza un element @p in "div1" si desparte-le cu <br>.
            var node = document.createTextNode(todo[i]);
            para.appendChild(node);
            var element = document.getElementById("div1");
            element.appendChild(para);
            let stringI=i.toString();
            para.setAttribute("id","p"+stringI);
            var br = document.createElement("br");
            
            br.setAttribute("id","br"+stringI);
            element.appendChild(br);


            var RemoveBTN = document.createElement("button");
            var minus = document.createTextNode("-");


            var unde = document.getElementById("remover");
            RemoveBTN.appendChild(minus);
            unde.appendChild(RemoveBTN);
            RemoveBTN.setAttribute("id","button"+i.toString());
            RemoveBTN.setAttribute("class","minus btn");
            
            i++;
            document.getElementById("input").value = "";

            localStorage.setItem(i.toString(), da); //salveaza ultimul element adaugat sub identificatorul @i 
            //pe care trebuie sa il transform in String din cauza metodei @setItem().

            localStorage.setItem("nr", i.toString());//salveaza ultimul index introdus in vector, identificator "nr".        

            



        }

    }

    function storage() { //functie care arata intr-o alerta ce e salvat in @localStorage
        var counter = localStorage.getItem("nr");

        counter = parseInt(counter, 10);





        var char = "";
        var todo2 = "";
        for (var j = 0; j <= counter; j++) {
            todo2 = localStorage.getItem(j.toString());
            char += todo2 + "\n";



        }
        alert(char);



    }
    function vanish() {

        localStorage.clear();
        location.reload();

    }
    function tasta() {

        var char = event.which || event.keyCode;
        if (char == 13) add();

    }

});