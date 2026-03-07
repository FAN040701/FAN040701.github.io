$(document).ready(function() {

  // Variables
  var $codeSnippets = $('.code-example-body'),
      $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      $popoverLink = $('[data-popover]'),
      navOffsetTop = 0,
      $document = $(document),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      }

  function init() {
    navOffsetTop = getNavOffsetTop()
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $popoverLink.on('click', openPopover)
    $document.on('click', closePopover)
    $('a[href^="#"]').on('click', smoothScroll)
    initDragScroll()
    buildSnippets();
  }

  function initDragScroll() {
    $('.drag-scroll').each(function() {
      var $el = $(this),
          isDragging = false,
          hasMoved = false,
          startY = 0,
          startScrollTop = 0;

      $el.on('mousedown', function(e) {
        isDragging = true;
        hasMoved = false;
        startY = e.pageY;
        startScrollTop = this.scrollTop;
        $el.addClass('dragging');
        e.preventDefault();
      });

      $el.on('mousemove', function(e) {
        var deltaY;
        if(!isDragging) {
          return;
        }
        deltaY = e.pageY - startY;
        if(Math.abs(deltaY) > 2) {
          hasMoved = true;
        }
        this.scrollTop = startScrollTop - deltaY;
      });

      $el.on('mouseup mouseleave', function() {
        isDragging = false;
        $el.removeClass('dragging');
      });

      $el.on('click', 'a', function(e) {
        if(hasMoved) {
          e.preventDefault();
          hasMoved = false;
        }
      });
    });
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  $("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = getNavOffsetTop()
    onScroll()
  }

  function getNavOffsetTop() {
    var navOffset;
    if(!$nav.length) {
      return 0;
    }
    navOffset = $nav.offset();
    return navOffset ? navOffset.top : 0;
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function() {
      var newContent = escapeHtml($(this).html())
      $(this).html(newContent)
    })
  }


  init();

});