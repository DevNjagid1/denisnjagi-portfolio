document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const form = document.getElementById("contactForm");

    // Smooth navbar scroll transition logic
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "15px 8%";
            navbar.style.background = "#05070a";
            navbar.style.borderBottom = "1px solid #d4af37";
        } else {
            navbar.style.padding = "20px 8%";
            navbar.style.background = "rgba(5, 7, 10, 0.95)";
            navbar.style.borderBottom = "1px solid rgba(212, 175, 55, 0.2)";
        }
    });

    // Upgraded Contact Form handler (Background Email + WhatsApp Redirection)
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // 1. Extract values from input fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // 2. Send the Email automatically in the background using Web3Forms
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                access_key: "f4fe3916-0bd0-47d9-b812-4e98a5c9e581",
                name: name,
                email: email,
                message: message,
                subject: `Portfolio Contact from ${name}`
            })
        })
        .then(response => {
            if (!response.ok) {
                console.error("Web3Forms API background submission failed.");
            }
        })
        .catch(error => console.error("Error sending email background process:", error));

        // 3. Format and trigger the direct WhatsApp communication link
        const whatsappMessage = `Hello Denis, my name is ${name}.\nEmail: ${email}\n\nMessage: ${message}`;
        const whatsappURL = `https://wa.me/254768436165?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp web or app seamlessly in a new tab
        window.open(whatsappURL, "_blank");

        // 4. Clean up the form fields immediately
        form.reset();
    });

});


