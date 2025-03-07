function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.in" });

    gsap.from(".overlay h1", { 
        duration: 1.5, 
        x: 200, 
        opacity: 0, 
        ease: "power3.out" 
    });

    gsap.from(".content p", { 
        duration: 1.5, 
        y: 50, 
        opacity: 0, 
        ease: "power2.out", 
        delay: 1 
    });

    // Animate the comparison section
    gsap.from(".comparison-section", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 1
    });

    // Animate each comparison container
    gsap.from(".comparison-container", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
        delay: 1.5
    });
});
gsap.to(".about-title", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

gsap.to(".about-content", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

gsap.to(".btn-learn-more", {
    opacity: 1,
    scale: 1.1,
    duration: 1.2,
    delay: 0.6,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});
