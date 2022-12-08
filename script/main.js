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