/*=================== toggle icon nav bar =====================================*/

let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuicon.onclick=()=>{
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*=================== scroll section  =====================================*/
let sections=document.querySelector('section');
let navlinks=document.querySelector('header nav a');

window.onscroll=()=>{
    sections.foreach(sec=>{
        let top=window.scrollY;
        let offset = sec.offsettop-150;
        let height=sec.offsetheight;
        let id=sec.getAttribute('id');
        
        if(top >= offset && top <= offset+height){
            navlinks.foreach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href"="+id+]').classList.add('active');
             });
            
        };
        });
        
    
/*=================== sticky nav bar section  =====================================*/

        let header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 100);

/*=================== remove toggle icon and navbar  =====================================*/

        menuicon.classList.remove('fa-xmark');
        navbar.classList.remove('active');

};

/*=================== scroll reveal  =====================================*/

    ScrollReveal({
        distance :'80px',
        duration:2000,
        delay:200
    });

    ScrollReveal().reveal('.home-content , heading', { origin:'top'});
    ScrollReveal().reveal('.home-img , .services-container, portfolio-box, .contact form', { origin:'bottom'});
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left'});
    ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});


/*===================  typed js  =====================================*/

document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Designer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
});



