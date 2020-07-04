document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("input").onkeypress = tasta;
    document.getElementsByClassName("minus").onkeypress = sterge;

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
        Pdiv=document.createElement("div");

        var element = document.getElementById("div1");

            var RemoveDIV=document.createElement("div");
            element.appendChild(RemoveDIV);
            
            var RemoveBTN = document.createElement("button");
            var minus = document.createTextNode("-");


        element.appendChild(para);
    
        var unde = document.getElementById("remover");
        para.setAttribute("id","button"+k.toString());

        var br = document.createElement("br");
        
        br.setAttribute("id","br"+k.toString());
        br.setAttribute("class","br");
        

            


            var unde = document.getElementById("remover");
            RemoveBTN.appendChild(minus);
            unde.appendChild(RemoveBTN);
            RemoveBTN.setAttribute("name",k.toString());
            RemoveBTN.setAttribute("id","button"+k.toString());
            RemoveBTN.setAttribute("class","minus btn-block btn "+k.toString()); 
           
            unde.appendChild(RemoveDIV);
            RemoveDIV.appendChild(RemoveBTN);
            
            listuta=document.getElementById("div1");
            div2=document.createElement("div");
            listuta.appendChild(div2);
            div2.appendChild(para);


            
        
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
        if (da.localeCompare("")) { //functia se executa doar daca am bagat text propriu-zis.




            todo[i] = da; //introdu variabila in vector.
            var para = document.createElement("p"); //creeaza un element @p in "div1" si desparte-le cu <br>.
            var node = document.createTextNode(todo[i]);
            para.appendChild(node);
            var element = document.getElementById("div1");
            element.appendChild(para);
            let stringI=i.toString();
            para.setAttribute("id","button"+stringI);
            var br = document.createElement("br");
            
            br.setAttribute("id","br"+stringI);
            br.setAttribute("class","br"+stringI);
            element.appendChild(br);


            var RemoveBTN = document.createElement("button");

            var minus = document.createTextNode("-");


            var unde = document.getElementById("remover");
            var div3 = document.getElementById("div1");
            RemoveBTN.appendChild(minus);
            
            RemoveBTN.setAttribute("name",k.toString());
            RemoveBTN.setAttribute("class","minus btn-block btn "+i.toString());
            
            
            i++;
            document.getElementById("input").value = "";

            localStorage.setItem(i.toString(), da); //salveaza ultimul element adaugat sub identificatorul @i 
            //pe care trebuie sa il transform in String din cauza metodei @setItem().

            localStorage.setItem("nr", i.toString());//salveaza ultimul index introdus in vector, identificator "nr".        

            div4=document.createElement("div");
            div3.appendChild(div4);
            div3.appendChild(RemoveBTN);

            



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
    function sterge() {

        alert("Am intrat in functie");
        var deSters=RemoveBTN.name;
        var nrDeSters=parseInt(deSters,10);
        

        
        var bll = localStorage.getItem("nr");
        bll--;
        localStorage.setItem("nr", bll);
        location.reload();

            }
    
    


});