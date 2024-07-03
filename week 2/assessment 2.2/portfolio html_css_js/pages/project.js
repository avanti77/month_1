document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
});
