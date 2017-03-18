count = 0;
createinput =function (){
    field_area = document.getElementById('marks');
		var li = document.createElement("li");
		var div = document.createElement("div");
		div.className = 'mdl-textfield mdl-js-textfield';
    var input = document.createElement("input");
        input.id = 'grade'+count;
		input.className = 'mdl-textfield__input';
		input.type = 'text'; //Type of field - can be any valid input type like text,file,checkbox etc.
    var input = document.createElement("input");
        input.id = 'grade'+count;
    	input.className = 'mdl-textfield__input';
    	input.type = 'text'; //Type of field - can be any valid input type like text,file,checkbox etc.
    li.appendChild(input);
    field_area.appendChild(li);
    //create the removal link
    var removalLink = document.createElement('a');
    removalLink.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
	  removalLink.onclick = function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
    var removalText = document.createTextNode('Remove Mark');
    removalLink.appendChild(removalText);
    li.appendChild(removalLink);
    count++;
}

calculateMarks= function() {
    submit = document get.ElementByID('submit')
    
}
