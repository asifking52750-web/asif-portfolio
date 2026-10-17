
document.addEventListener("DOMContentLoaded", function () {

    // 1. Select HTML elements
    let heading = document.querySelector(".hero h1");
    let cvButton = document.querySelector(".hero button");
    let projectButton = document.querySelector(".box button");
    let contactForm = document.querySelector(".contact form");

    // 2. Navbar smooth scrolling
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            let targetId = link.getAttribute("href");
            let targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Download CV button
    cvButton.addEventListener("click", function () {
        let cvLink = document.createElement("a");

        cvLink.href = "Asif-Resume.pdf";
        cvLink.download = "Asif-Resume.pdf";

        document.body.appendChild(cvLink);
        cvLink.click();
        cvLink.remove();
    });

    // 4. View Project button
    projectButton.addEventListener("click", function () {
        alert("Project ka live link abhi add karna baaki hai!");
    });

    // 5. Contact form validation
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = contactForm.querySelector(
            'input[type="text"]'
        ).value.trim();

        let email = contactForm.querySelector(
            'input[type="email"]'
        ).value.trim();

        let message = contactForm.querySelector(
            "textarea"
        ).value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you, " + name + "! Form validation successful.");

        contactForm.reset();
    });

});
