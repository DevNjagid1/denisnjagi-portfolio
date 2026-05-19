document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const form = document.getElementById("contactForm");

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

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        window.open(`mailto:denismwenda763@gmail.com?subject=${subject}&body=${body}`);

        const whatsappMessage = `Hello Denis, my name is ${name}. ${message}`;
        const whatsappURL = `https://wa.me/254768436165?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        form.reset();
        alert("Message sent successfully via Email and WhatsApp.");
    });

});




form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // trial fix
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
    });

    const whatsappMessage = `Hello Denis, my name is ${name}.\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/254768436165?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappURL, "_blank");

    form.reset();
    alert("Message sent via Email! Redirecting to WhatsApp...");
});



