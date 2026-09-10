// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
            });
        });
    }
});

// Copy email to clipboard
    function copyEmail(event, email) {
        navigator.clipboard.writeText(email).then(function() {
            const msg = document.getElementById('copy-message');
            if (msg) {
                msg.style.display = 'inline';
                setTimeout(function() {
                    msg.style.display = 'none';
                }, 2000);
            }
        }).catch(function(err) {
            console.log('Copy failed:', err);
        });
    }