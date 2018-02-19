var squares = document.querySelectorAll(".square");
var tryagain = document.querySelector("#try");
var h1 = document.getElementsByTagName("h1")[0];
var stat = document.getElementById('try2');
var str = document.querySelector("#spn");
var sqrs = 6;
var target;
var easymode = false;
var s1 = document.querySelector("#easy");
var s2 = document.querySelector("#hard");
var optionals = document.querySelectorAll(".optional");
var pickedColor = document.querySelector("#pickedColor");

str.addEventListener("click", function (event) {
	if (event.target.id == "easy" && !easymode) {
		s1.classList.add("selected");
		s2.classList.remove("selected");
		easymode = !easymode;
		sqrs = 3;
		hideextras();
		startFresh();
	} else if (event.target.id == "hard" && easymode) {
		s2.classList.add("selected");
		s1.classList.remove("selected");
		easymode = !easymode;
		sqrs = 6;
		hideextras();
		startFresh();
	}

});

startFresh();

tryagain.addEventListener("click", function(){
	startFresh();
	tryagain.textContent = "New Colors";
});


function Won() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = squares[target].style.backgroundColor;
	}
	stat.textContent = "Correct!";
	h1.style.backgroundColor = squares[target].style.backgroundColor;
	tryagain.textContent = "Play Again?";
	h1.classList.add("default");
}

function hideextras() {
	let gtre = easymode ? "none" : "block";
	for (let i = 0; i < optionals.length; i++) {
		optionals[i].style.display = gtre;
	}
}

function startFresh() {	
	stat.textContent ="";
	h1.style.backgroundColor = "#4286f4";
	target = Math.floor(Math.random() * sqrs);	
	for (let i = 0; i < sqrs; i++) {
		squares[i].style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
		squares[i].addEventListener("click", function () {
			if (this.style.backgroundColor === squares[target].style.backgroundColor) {
				Won(status);
			} else {
				stat.textContent = "Try Again!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
	pickedColor.textContent = squares[target].style.backgroundColor;
}