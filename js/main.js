// !Navbar color on scroll
$(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("navbar-scroll");
        } else {
            header.removeClass("navbar-scroll");
        }
    }); 
});
// !Navbar color on scroll



// !Navbar elements highlight on scroll
const sections = document.querySelectorAll("section");

const options = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px"
}

const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach((entry) => {
        if(entry.target.id === "about-us")
            if(entry.isIntersecting)
                document.getElementById("li-about-us").style = "border-bottom: 3px solid #EA4335;font-weight: 700;"
            else
                document.getElementById("li-about-us").style = "border-bottom:none;font-weight: 400;"
        
        if(entry.target.id === "domains")
            if(entry.isIntersecting)
                document.getElementById("li-domains").style = "border-bottom: 3px solid #EA4335;font-weight: 700;"
            else
                document.getElementById("li-domains").style = "border-bottom:none;font-weight: 400;"

        if(entry.target.id === "hero")
            if(entry.isIntersecting)
                document.getElementById("li-home").style = "border-bottom: 3px solid #EA4335;font-weight: 700;"
            else
                document.getElementById("li-home").style = "border-bottom:none;font-weight: 400;"

        if(entry.target.id === "projects")
            if(entry.isIntersecting)
                document.getElementById("li-projects").style = "border-bottom: 3px solid #EA4335;font-weight: 700;"
            else
                document.getElementById("li-projects").style = "border-bottom:none;font-weight: 400;"

        if(entry.target.id === "contact-us")
            if(entry.isIntersecting)
                document.getElementById("li-contact-us").style = "border-bottom: 3px solid #EA4335;font-weight: 700;"
            else
                document.getElementById("li-contact-us").style = "border-bottom:none;font-weight: 400;"
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});
// !Navbar elements highlight on scroll
