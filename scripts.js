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
// scripts.js

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Toggle Edit Profile Section
    const editProfileButton = document.getElementById('edit-profile-button');
    const editProfileSection = document.getElementById('edit-profile-section');
    const cancelEditButton = document.getElementById('cancel-edit');

    // Initially hide the Edit Profile section
    editProfileSection.classList.add('hidden');

    editProfileButton.addEventListener('click', function() {
        if (editProfileSection.classList.contains('hidden')) {
            editProfileSection.classList.remove('hidden');
            editProfileSection.style.maxHeight = editProfileSection.scrollHeight + 'px'; // Animate expansion
        } else {
            editProfileSection.style.maxHeight = '0';
            setTimeout(() => editProfileSection.classList.add('hidden'), 300); // Delay hiding to allow transition
        }
    });

    cancelEditButton.addEventListener('click', function() {
        editProfileSection.style.maxHeight = '0';
        setTimeout(() => editProfileSection.classList.add('hidden'), 300); // Delay hiding to allow transition
    });
});

