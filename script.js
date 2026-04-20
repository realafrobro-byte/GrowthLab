document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Transform hamburger to X
        const spans = menuToggle.querySelectorAll('span');
        if(nav.classList.contains('active')){
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('active')) {
                menuToggle.click();
            }
        });
    });

    // 2. FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.icon');

        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight;

            // Close all other open FAQs
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.icon');
                if (otherAnswer !== answer) {
                    otherAnswer.style.maxHeight = null;
                    otherIcon.textContent = '+';
                }
            });

            // Toggle current FAQ
            if (isOpen) {
                answer.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
            }
        });
    });

    // 3. Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0';
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
