// Scroll to Services section when "Learn More" is clicked
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Display alert for "Subscribe" button
  document.getElementById('subscribeBtn').addEventListener('click', function() {
    alert('Thank you for subscribing!');
  });
  