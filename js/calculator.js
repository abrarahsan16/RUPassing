count = 0;
createinput= function(){
	field_area = document.getElementById('marks')









}




count = 0;
createinput =function (){
    field_area = document.getElementById('marks')
		var li = document.createElement("li");
    var input = document.createElement("input");
    input.id = 'grade'+count;
    input.name = 'grade'+count;
		input.classname = 'mdl-textfield__input';
		input.pattern = '-?[0-9]*(\.[0-9]+)?'
		input.type = 'text'; //Type of field - can be any valid input type like text,file,checkbox etc.
    li.appendChild(input);
    field_area.appendChild(li);
    //create the removal link
    var removalLink = document.createElement('a');

	  removalLink.onclick = function(){
        this.parentNode.parentNode.removeChild(this.parentNode)
    }
    var removalText = document.createTextNode('Remove Field');
    removalLink.appendChild(removalText);
    li.appendChild(removalLink);
    count++
}
