// Simple script to ensure animations run correctly
document.addEventListener('DOMContentLoaded', () => {
  // Set a slight delay to ensure the DOM is fully loaded
  setTimeout(() => {
    // Add a class to trigger animations
    document.body.classList.add('animations-ready');
    
    // Optional: Add intersection observer for scroll-based animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    // Apply to specific elements if needed
    document.querySelectorAll('.home-content h2, .home-content p, .lab-showcase, .post-item').forEach(el => {
      observer.observe(el);
    });
  }, 100);
}); 