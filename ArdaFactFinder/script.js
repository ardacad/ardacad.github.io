function factOne(){
	document.querySelector('section').innerHTML= "<h3 id='facts'> Our galaxy, Milky Way is set to collide with the Andromeda galaxy.</h3><br> <img src='images/andromeda.jpg' alt='Andromeda Galaxy' id='images'>";
}
function factTwo(){
	document.querySelector('section').innerHTML= "<h3 id='facts'>Saturn could float on water.</h3><br> <img src='images/saturn.jpg' alt='Picture of Saturn in Space' id='images'>";
	
}
function factThree(){
	document.querySelector('section').innerHTML= "<h3 id='facts'>More than 200 viruses can result in a cold.</h3><br> <img src='images/sickWomen.jpg' alt='Women blowing her nose' id='images'>";
	
}
function factFour(){
	document.querySelector('section').innerHTML= "<h3 id='facts'> Mars has the solar system's biggest volcano.</h3><br> <img src='images/mars.png' alt='Picture of Mars in space' id='images'>";
	
}
function factFive(){
	document.querySelector('section').innerHTML= "<h3 id='facts'>Hurricanes release the energy of 10,000 nuclear bombs.</h3><br> <img src='images/hurricane.jpg' alt='Picture of a hurricane' id='images'>";
	
}

function defaultTheme(){
	document.querySelector('body').style.backgroundColor="#708B75";
	document.querySelector('section').style.backgroundColor="#F9AB55";
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++){
		inputs[i].style.backgroundColor = "#1c5f7a";
		inputs[i].style.color = "#F58A07";
	}
	
}

function secondTheme(){
	document.querySelector('body').style.backgroundColor="#A6A57A";
	document.querySelector('section').style.backgroundColor="#A33B20";
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++){
		inputs[i].style.backgroundColor = "#5A352A";
		inputs[i].style.color = "#A47963";
	}
	
}

function thirdTheme(){
	document.querySelector('body').style.backgroundColor="#457B9D";
	document.querySelector('section').style.backgroundColor="#A8DADC";
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++){
		inputs[i].style.backgroundColor = "#1D3557";
		inputs[i].style.color = "#F1FAEE";
	}
}

