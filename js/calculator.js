/*var count = 2;
 function createinput(){
    field_area = document.getElementById('marks');
        var brk = document.createElement("br");

        var div1 = document.createElement("div");
        div1.className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded";

        var input1 = document.createElement("input");
        input1.className = "mdl-textfield__input";
        input1.type = "text";
        input1.id = "mark"+count;

        var label1 = document.createElement("label");
        label1.className = "mdl-textfield__label";
        label1.value = "Mark Assigned..."
        label1.setAttribute("for","mark"+count);

        var div2 = document.createElement("div");
        div2.className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded";

        var input2 = document.createElement("input");
        input2.className = "mdl-textfield__input";
        input2.type = "text";
        input2.id = "weight"+count;

        var label2 = document.createElement("label");
        label2.className = "mdl-textfield__label";
        label2.value = "Mark Weighing...";
        label2.setAttribute("for","weight"+count);


        div1.appendChild(input1);
        div1.appendChild(label1);
        div2.appendChild(input2);
        div2.appendChild(label2);
        field_area.appendChild(brk);
        field_area.appendChild(div1);
        field_area.appendChild(div2);

        //create the removal link
        var removalLink = document.createElement('a');
        removalLink.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
    	removalLink.onclick = function(){
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
        var removalText = document.createTextNode('Remove Mark');
        removalLink.appendChild(removalText);
        div1.appendChild(removalLink);
        div2.appendChild(removalLink);
        count++;
}*/
