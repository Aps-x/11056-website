document.querySelectorAll('.banknote').forEach(banknote => {
    banknote.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});