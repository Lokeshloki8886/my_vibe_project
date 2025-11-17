document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

// Modal functionality
const modal = document.getElementById('modal');
document.getElementById('openModal').onclick = () => modal.style.display = 'flex';
document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; };

// Simple Carousel
const reviews = document.querySelectorAll('.review');
let current = 0;
document.getElementById('next').onclick = () => {
    reviews[current].classList.remove('active');
    current = (current + 1) % reviews.length;
    reviews[current].classList.add('active');
};
document.getElementById('prev').onclick = () => {
    reviews[current].classList.remove('active');
    current = (current - 1 + reviews.length) % reviews.length;
    reviews[current].classList.add('active');
};

// Form validation
document.getElementById('subscribeForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if(email.includes('@')) {
        alert('Thank you for subscribing!');
        modal.style.display = 'none';
        e.target.reset();
    } else {
        alert('Please enter a valid email.');
    }
});