document.getElementById("btn-login").addEventListener('click', function(){
	event.preventDefault();
	
	//Se borra los textos creados cada vez que se aprete el boton-send
	document.querySelectorAll("small").forEach(function(small) {small.remove()});

	var inputNombre = document.getElementById('name');
	var inputPw = document.getElementById('password');

	
	validarNombre(inputNombre);
	validarPassword(inputPw);
/*
	if(validarNombre(inputNombre) && validarPassword(inputPw)){
		document.getElementById("btn-login").setAttribute("href","gallery.html"); 
	} */

});


function validarNombre(inputNombre) {    
	if(inputNombre.value == ""){  
		inputNombre.value = "";
		var rellenarText = document.createTextNode("Ingresar nombre de usuario");
		var labelError = document.createElement('small');
		labelError.classList.add('error');
		labelError.appendChild(rellenarText);
		document.getElementById("nombre1").appendChild(labelError);
		  
	} else {  
		document.getElementsByClassName("botoncito")[0].setAttribute("href","collage.html");
	}  
} 


function validarPassword(inputPw) {   
	if(inputPw.value == "" || inputPw.value == "123456" || inputPw.value.length < 6){  
		inputPw.value = "";
		var rellenarText = document.createTextNode("Ingresar contraseña");
		var labelError = document.createElement('small');
		labelError.classList.add('error');
		labelError.appendChild(rellenarText);
		document.getElementById("pw1").appendChild(labelError);
	} else {  
		document.getElementsByClassName("botoncito")[0].setAttribute("href","collage.html"); 
	}  
} 

//Drag and drop functions

function drag(ev){ //ev de event es lo mismo, los atributos pueden variar
	ev.dataTransfer.setData('text', ev.target.id);
	//img se lee como text en el navegador
	//target es el objetivo 
}


function finalDrop(ev){
	ev.preventDefault(); 
	//SIEMPRE se pondrá esto 

}

function drop(ev){
	ev.preventDefault();
	var dato = ev.dataTransfer.getData('text');
	//getData trae.. sin el ev.target.id
	ev.target.appendChild(document.getElementById(dato));	
}

