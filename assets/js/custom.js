$(document).foundation({
  orbit: {
      animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
      timer_speed: 7500, // Sets the amount of time in milliseconds before transitioning a slide
      pause_on_hover: false, // Pauses on the current slide while hovering
      resume_on_mouseout: false, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
      next_on_click: true, // Advance to next slide on click
      animation_speed: 500, // Sets the amount of time in milliseconds the transition between slides will last
      stack_on_small: false,
      navigation_arrows: true,
      slide_number: false,
      slide_number_text: 'of',
      container_class: 'orbit-container',
      stack_on_small_class: 'orbit-stack-on-small',
      next_class: 'orbit-next', // Class name given to the next button
      prev_class: 'orbit-prev', // Class name given to the previous button
      timer_container_class: 'orbit-timer', // Class name given to the timer
      timer_paused_class: 'paused', // Class name given to the paused button
      timer_progress_class: 'orbit-progress', // Class name given to the progress bar
      slides_container_class: 'orbit-slides-container', // Class name given to the slide container
      preloader_class: 'preloader', // Class given to the preloader
      slide_selector: 'li', // Default is '*' which selects all children under the container
      bullets_container_class: 'orbit-bullets',
      bullets_active_class: 'active', // Class name given to the active bullet
      slide_number_class: 'orbit-slide-number', // Class name given to the slide number
      caption_class: 'orbit-caption', // Class name given to the caption
      active_slide_class: 'active', // Class name given to the active slide
      orbit_transition_class: 'orbit-transitioning',
      bullets: false, // Does the slider have bullets visible?
      circular: true, // Does the slider should go to the first slide after showing the last?
      timer: true, // Does the slider have a timer active? Setting to false disables the timer.
      variable_height: false, // Does the slider have variable height content?
      swipe: true,
      // before_slide_change: noop, // Execute a function before the slide changes
      // after_slide_change: noop // Execute a function after the slide changes
  },

  reveal: {
        animation: 'fadeAndPop',
        animation_speed: 250,
        close_on_background_click: true,
        dismiss_modal_class: 'close-reveal-modal',
        multiple_opened: false,
        bg_class: 'reveal-modal-bg',
        root_element: 'body',
        on_ajax_error: $.noop,
        bg : $('.reveal-modal-bg'),
        css : {
          open : {
            'opacity': 0,
            'visibility': 'visible',
            'display' : 'block'
          },
          close : {
            'opacity': 1,
            'visibility': 'hidden',
            'display': 'none'
          }
        }
      }
});


(function($) {
      $('a.cardapio-pizza-bigger').on('click', function(e) {
            e.preventDefault();
            $a = $(this);

            $('#cardapio-pizza-big img').attr(
                  'src',
                  $a.parent().css('background-image').replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'').replace(/\.thumbnail/, '')
            );

            $('#cardapio-pizza-big').foundation('reveal','open');
      });
})(jQuery);

