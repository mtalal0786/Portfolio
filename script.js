// Scroll Section navLinks
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);

    // Responsive nav remove and show
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

// Add click event to navLinks to close navbar on click
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    };
});


ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

//scroll reveal
ScrollReveal().reveal('.home-content,.heading', {origin:'top'});
ScrollReveal().reveal('.home-image,.services-container,.porfolio-box,.contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content', {origin:'right'});

// typed js
const typed = new Typed('.multiple-text', {
    strings : ['Frontend Developer' , 'Web Developer' ,'ReactJS Developer'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true

});

const form = document.querySelector('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const emailMessage = document.getElementById('emailMessage');

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br>Email: ${email.value}<br>Phone Number: ${phone.value}<br>Message: ${emailMessage.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "talalshahbaz000786@gmail.com",
        Password: "AF6B6E07401A0D24967493D74F8E6B1ECF7A",
        To: 'talalshahbaz000786@gmail.com',
        From: email.value,
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                alert("Failed to send email: " + message);
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
});





