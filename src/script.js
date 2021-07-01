var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

var btn = document.getElementById('myBtn');
var btn2 = document.getElementById('myBtn2');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
	modal.style.display = 'flex';
};
btn2.onclick = function () {
	modal.style.display = 'flex';
};

span.onclick = function () {
	modal.style.display = 'none';
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
window.onclick = function (event) {
	if (event.target == modal2) {
		modal2.style.display = 'none';
	}
};

// Navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});

navbarLinks.click(function () {
	navbarLinks.collapse('hide');
});
