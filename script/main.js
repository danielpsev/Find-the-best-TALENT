let openMobileNavBtn = document.getElementById("openMobileNavBtn");
let closeMobileNavBtn = document.getElementById("closeMobileNavBtn");
openMobileNavBtn.addEventListener("click", function(){
	let mobileNav = document.getElementById("mobileNav");
	mobileNav.style.display = "block";
});
closeMobileNavBtn.addEventListener("click", function(){
	let mobileNav = document.getElementById("mobileNav");
	mobileNav.style.display = "none";
});