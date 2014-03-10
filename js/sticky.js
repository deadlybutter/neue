//
//
//  **Pins an element to the top of the screen on scroll.**
//  Requires pinned element to have `.js-sticky` class.
//
//

(function($) {
  "use strict";

  var divs = [];

  // Prepare markup and register divs with scroll handler
  function prepareSticky(div) {
    // Calculate the element's offset from the top of the page while anchored
    var divOffset = $(div).offset().top;

    // Create the data structure that we'll store this stuff in
    var divObj = {
      $el: $(div),
      offset: divOffset
    }

    // Add jQuery object and offset value to divs array
    divs.push(divObj);
  }

  // Scroll handler: pins/unpins divs on scroll event
  function scrollSticky(div) {
    $.each(divs, function(index, div) {
      // Compare the distance to the top of the page with the distance scrolled.
      // For each div: if we've scrolled past it's offset, pin it to top.
      if ($(window).scrollTop() > div.offset) {
        div.$el.addClass("is-stuck");
      } else {
        div.$el.removeClass("is-stuck");
      }
    });
  }

  // Attach our functions to their respective events.
  $(document).ready(function() {
    $(".js-sticky").each(function(index, div) {
      prepareSticky(div);
    });

    $(window).on("scroll", scrollSticky);

    // Run once on initialization, in case page is already scrolled on load.
    scrollSticky();
  });



})(jQuery);