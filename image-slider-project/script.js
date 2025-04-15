$(document).ready(function () {
    // Initialize slick slider
    $('.slider').slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    // Open modal on image click
    $('.slide img').on('click', function () {
      const imgSrc = $(this).attr('src');
      $('#modalImage').attr('src', imgSrc);
      $('#imageModal').fadeIn();
      gsap.from("#modalImage", { scale: 0.8, opacity: 0, duration: 0.5 });
    });
  
    // Close modal
    $('.close, #imageModal').on('click', function () {
      $('#imageModal').fadeOut();
    });
  
    // Prevent modal image click from closing modal
    $('#modalImage').on('click', function (e) {
      e.stopPropagation();
    });
  });
  