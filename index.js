function copy(link) {
    navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
  }

  document.addEventListener('DOMContentLoaded', () => {
    function openModal($el) {
      $el.classList.add('is-active');
    }
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
      (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
      document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) {
        closeAllModals();
      }
    });


    
  });

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    var threshold=250; //in px
    $('docs').each(function(i) //list of sections tag to loop
    {
        if ($(this).position().top-threshold <= scrollDistance && i<4) {
            $('#one').removeClass('active');
            $('#two').eq(i).addClass('active');
        } else {
            $('#two').eq(i).removeClass('active');
            $('#one').addClass('active');
        }
    });
  }).scroll();