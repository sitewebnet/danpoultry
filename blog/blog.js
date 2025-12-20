// Blog Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog page loaded');
    
    // Add smooth hover effects to blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    // Add topic hover effects
    const topics = document.querySelectorAll('.topic');
    
    topics.forEach(topic => {
        topic.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        topic.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Blog card click handler (optional)
    blogCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on links
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            const link = this.querySelector('.blog-title a');
            if (link) {
                // Open in new tab
                window.open(link.href, '_blank');
            }
        });
    });
});
