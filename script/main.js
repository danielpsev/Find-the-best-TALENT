let openMobileNavBtn = document.getElementById("openMobileNavBtn");
let closeMobileNavBtn = document.getElementById("closeMobileNavBtn");
let mobileNav = document.getElementById("mobileNav");
let mobNavRightContainer = document.getElementById("mobNavRightContainer");
const closeMobNav = (e) => {
	mobileNav.classList.remove("mob-nav-container-animation");
	mobNavRightContainer.classList.remove("mob-nav-inner-animation");
	mobNavRightContainer.classList.add("mob-nav-close-animation");
	setTimeout(function(){
	//mobNavRightContainer.addEventListener('animationend', () =>{
		mobileNav.style.display = "none";
		mobNavRightContainer.classList.remove("mob-nav-close-animation");
	//});
	},180);
}
closeMobileNavBtn.addEventListener("click", closeMobNav);


openMobileNavBtn.addEventListener("click", function(){
	mobileNav.classList.add("mob-nav-container-animation");
	mobNavRightContainer.classList.add("mob-nav-inner-animation");
	mobileNav.style.display = "block";
});




window.onclick = function(e) {
    if (e.target.classList.contains('mobile-nav-container') || e.target.id == "closeMobileNavBtn" || e.target.id == "closeMobileNavBtn_path"){
		closeMobNav();
    }
}

//window.onload = function() {
let flippable = document.getElementsByClassName("flippable");
if(flippable.length){
	var buttons = document.getElementsByClassName('item--more-information-btn');
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function(f) {
			let index = Array.from(buttons).indexOf(this);
			flippable[index].classList.toggle("flipped-item");
			buttons[index].classList.toggle("item--more-information-second-btn");
			buttons[index].classList.toggle("item--more-information-main-btn");
		}
	}
}

//}