function showModal() {
	let modal = document.querySelector('.modal');
	modal.style.display = 'block';
}

function hideMOdal() {
	let modal = document.querySelector('.modal');
	modal.style.display = 'none';
}

document.querySelector('.video-link').addEventListener('click', showModal);

document.querySelector('.btn-close').addEventListener('click', hideMOdal);
function eventhandlers(){
	document.onclick = function(){
		alert("Hello World of Java Script");
	}
}
window.onload(){
	eventhandlers();
}