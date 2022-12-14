let openMobileNavBtn = document.getElementById("openMobileNavBtn");
let closeMobileNavBtn = document.getElementById("closeMobileNavBtn");
let mobileNav = document.getElementById("mobileNav");
openMobileNavBtn.addEventListener("click", function(){
	mobileNav.style.display = "block";
});
closeMobileNavBtn.addEventListener("click", function(){
	mobileNav.style.display = "none";
});
window.onclick = function(event) {
    if (event.target.classList.contains('mobile-nav-container')){
		mobileNav.style.display = "none";
    }
}

//window.onload = function() {
let flippable = document.getElementsByClassName("flippable");
if(flippable.length){
	var anchors = document.getElementsByClassName('item--more-information-btn');
	for(var i = 0; i < anchors.length; i++) {
	   // var anchor = anchors[i];
		anchors[i].onclick = function(f) {
			let index = Array.from(anchors).indexOf(this);
			flippable[index].classList.toggle("flipped-item");
			anchors[index].classList.toggle("item--more-information-second-btn");
			anchors[index].classList.toggle("item--more-information-main-btn");
			
		}
	}
}

//}