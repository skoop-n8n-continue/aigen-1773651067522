document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World Signage App Initialized');

    // Example of a simple dynamic effect for digital signage
    const message = document.querySelector('.message');

    // Add a slight pulse effect every few seconds
    setInterval(() => {
        message.style.transition = 'transform 2s ease-in-out';
        message.style.transform = 'scale(1.05)';

        setTimeout(() => {
            message.style.transform = 'scale(1)';
        }, 2000);
    }, 6000);
});
