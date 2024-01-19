function toggleMobileNav() {
    console.log('test');
    var mobileNav = document.getElementById("mobileNav");
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
}
