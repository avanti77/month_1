document.addEventListener('DOMContentLoaded', function() {
    const techStackItems = document.querySelectorAll('.tech-stack li');
    const toolsItems = document.querySelectorAll('.tools li');
    
    animateItems(techStackItems);
    animateItems(toolsItems);
    
    function animateItems(items) {
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }
});
