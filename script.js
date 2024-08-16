// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Toggle visibility of sections
    document.querySelector('.give-badge-button').addEventListener('click', function() {
        const badgeSection = document.getElementById('give-badge');
        badgeSection.classList.toggle('hidden');
    });

    document.querySelector('.post-button').addEventListener('click', function() {
        const postForm = document.getElementById('post-form');
        postForm.classList.toggle('hidden');
    });

    // Scrolling functionality for profiles
    const scrollLeftButton = document.querySelector('.scroll-left');
    const scrollRightButton = document.querySelector('.scroll-right');
    const profilesContainer = document.querySelector('.scrolling-profiles');

    scrollLeftButton.addEventListener('click', function() {
        profilesContainer.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', function() {
        profilesContainer.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});
