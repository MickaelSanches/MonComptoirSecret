document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursor-follower');

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, input, textarea, .photo-carousel-button, .map-container, .map-iframe, .google-reviews-container, .google-reviews-content').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorFollower.style.transform = 'scale(1.5)';
        });
        element.addEventListener('mouseleave', () => {
            cursorFollower.style.transform = 'scale(1)';
        });
    });

    document.addEventListener('mousedown', function () {
        cursor.style.transform = 'scale(0.8)';
        cursorFollower.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', function () {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});
