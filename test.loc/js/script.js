function Dropdown(settings) {
  this.$root = settings.$root;
  this.$toggle = settings.$toggle;
  this.$popup = settings.$popup;
  this.classRootOpen = settings.classRootOpen;
  this.settings = settings;
  this.fnBeforeOpen = settings.fnBeforeOpen;
  this.fnAfterClose = settings.fnAfterClose;
  this.init();
}

Dropdown.prototype.init = function () {
  this.$toggle.on('click', this.toggle.bind(this));
  this.onDocumentClick = this.onDocumentClick.bind(this);
  this.$root.data('dropdown', this);
  if (this.$root.data('state') === 'opened') {
    this.open();
  }
};

Dropdown.prototype.toggle = function (e) {
  e.stopPropagation();
  e.preventDefault();

  if (this.isOpen) {
    this.close();
  } else {
    this.open();
  }
};

Dropdown.prototype.open = function () {
  if (typeof this.fnBeforeOpen === 'function') {
    this.fnBeforeOpen();
  }
  this.$root.addClass(this.classRootOpen);
  if (this.settings.animateDuration) {
    this.$popup
        .stop()
        .clearQueue()
        .slideDown(this.settings.animateDuration);
  }
  if (typeof this.settings.cbBeforeOpen === 'function') {
    this.settings.cbBeforeOpen(this);
  }
  if (!this.settings.otherClick) {
    $(document).on('click', this.onDocumentClick);
  }
  this.isOpen = true;
};

Dropdown.prototype.close = function () {
  this.$root.removeClass(this.classRootOpen);
  if (this.settings.animateDuration) {
    this.$popup
        .stop()
        .clearQueue()
        .slideUp(this.settings.animateDuration, function () {
          $(this).removeAttr('style');
        });
  }
  if (typeof this.settings.cbAfterClose === 'function') {
    this.settings.cbAfterClose(this);
  }
  if (!this.settings.otherClick) {
    $(document).off('click', this.onDocumentClick);
  }
  this.isOpen = false;
  if (typeof this.fnAfterClose === 'function') {
    this.fnAfterClose();
  }
};

Dropdown.prototype.onDocumentClick = function (e) {
  const $target = $(e.target);
  const $document = $(document);
  var $parent = $target.parent();
  while (!$parent.is($document) && !$parent.is(this.$root) && !$parent.is(this.$popup)) {
    $parent = $parent.parent();
  }
  if (!$parent.is($document)) {
    return;
  }
  this.close();
};

function registerForm() {
  $(function () {
    var $sections = $('.form-section');

    function navigateTo(index) {
      // Mark the current section with the class 'current'
      $sections
          .removeClass('current')
          .eq(index)
          .addClass('current');

      $('.step')
          .removeClass('active')
          .eq(index)
          .addClass('active');
      // Show only the navigation buttons that make sense for the current section:
      $('.form-navigation .form-previous').toggle(index > 0);
      var atTheEnd = index >= $sections.length - 1;
      $('.form-navigation .form-next').toggle(!atTheEnd);
      $('.form-navigation .form-send').toggle(atTheEnd);
    }

    function curIndex() {
      // Return the current index by looking at which section has the class 'current'
      return $sections.index($sections.filter('.current'));
    }

    // Previous button is easy, just go back
    $('.form-navigation .form-previous').click(function() {
      navigateTo(curIndex() - 1);
    });

    // Next button goes forward iff current block validates
    $('.form-navigation .form-next').click(function() {
      $('.form_register').parsley().whenValidate({
        group: 'block-' + curIndex()
      }).done(function() {
        navigateTo(curIndex() + 1);
      });
    });

    // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
    $sections.each(function(index, section) {
      $(section).find(':input').attr('data-parsley-group', 'block-' + index);
    });
    navigateTo(0); // Start at the beginning
  });
}

function createFullPage() {
  var width = $(window).width();
  var $current = $('.current-pages');

  var pTop = '';
  var pBot = '';

  if($(window).width() > 768) {
    pTop = '100px';
    pBot = '185px';
  }else {
    pTop = '70px';
    pBot = '20px';
  }

  $('#fullpage').fullpage({
    keyboardScrolling: false,
    fixedElements: '.header, .footer, .social, .menu-toggle, .menu, .slider-btn',
    paddingTop: pTop,
    paddingBottom: pBot,
    navigation: width < 768,
    navigationPosition: 'right',
    easing: 'ease-in-out',
    scrollingSpeed: 1500,
    scrollOverflow: true,
    verticalCentered: true,
    normalScrollElementTouchThreshold: 0.5,
    fitToSection: true,
    fitToSectionDelay: 2000,
    touchSensitivity: 15,

    onLeave: function(index, nextIndex, direction){
      $('.navigation__item, .navigation__counter-step span').removeClass('active');
      $('.navigation__item').eq(nextIndex - 1).addClass('active');
      $('.navigation__counter-step span').eq(nextIndex - 1).addClass('active');

      $current.text('0' + nextIndex);
    }
  });

  $('.navigation__item').on('click', function () {
    var number = $(this).data('section');

    $('.navigation__item, .navigation__counter-step span').removeClass('active');
    $(this).addClass('active');
    $('.navigation__counter-step span').eq(number - 1).addClass('active');

    $current.text('0' + number);

    $.fn.fullpage.moveTo(number);
  });

  $('.full-prev').on('click', function () {
    $.fn.fullpage.moveSectionUp();
  });

  $('.full-next').on('click', function () {

    $.fn.fullpage.moveSectionDown();
  });

}

function openModal(id) {
  $.magnificPopup.open({
    items: {
      src: id
    },
    type: 'inline',
    preloader: false,
    showCloseBtn: false,
    midClick: true,
    alignTop: false,
    mainClass: 'mfp-with-zoom mfp-with-background mfp-with-white-background',
    closeOnBgClick: true
  });
}

function uploadField() {
  var uploadBox = $('.upload-field');
  var uploadInput = uploadBox.find('.upload-field__input');
  var uploadImg = uploadBox.find('.upload-field__img');

  uploadInput.on('change', function() {
    readURL(this);
    uploadBox.addClass('uploaded');
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        uploadImg.attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
}

function collapse() {
  var $collapse = $('.collapse');

  if (!$collapse.length) return;

  $collapse.each(function () {
    var self = $(this);
    var $btn = self.find('.collapse__btn');
    var $box = self.find('.collapse__box');

    $btn.on('click', function () {
      $box.stop().slideToggle('slow');
      self.toggleClass('active');
    })
  })
}

function initCalendarSidebar() {

  $('.sidebar-calendar').datetimepicker({
    timepicker:false,
    format:'d.m.Y',
    inline: true,
    todayButton: false,
    defaultSelect: false,
    dayOfWeekStart: 1,
    scrollMonth: false,
    scrollInput: false
  });
}

$(document).ready(function() {
  createFullPage();

  registerForm();

  var lang = $('html').attr('lang');

  $.datetimepicker.setLocale(lang);

  uploadField();

  collapse();

  $('.menu-toggle').on('click', function () {
    var $menu = $('.menu');
    $menu.toggleClass('open');

    if ($('#fullpage').length) {
      if ($menu.hasClass('open')) {
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);
      } else  {
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true)
      }
    }
  });

  $('.search-toggle').on('click', function () {
    var $search = $('.header__search');
    $search.toggleClass('open');
    $(this).toggleClass('open');

    $('.menu-toggle').toggleClass('hidden');
  });

  $('.news-vertical-slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    touchThreshold: 20,
    prevArrow: false,
    nextArrow: '.slider-news-box__next'
  });

  $('.js-open-modal').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var id = $(this).attr('href');

    openModal(id);
  });

  $('.js-close-modal').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $.magnificPopup.close();
  });

  $(".tabs").lightTabs();


  $('.drop-box').each(function () {
    const $root = $(this);
    const $toggle = $root.find('.drop-box__btn');
    const $popup = $root.find('.drop-box__drop');

    new Dropdown({
      $root: $root,
      $toggle: $toggle,
      $popup: $popup,
      classRootOpen: 'open',
      animateDuration: 0
    });
  });

  $('.date-picker').datetimepicker({
    format:'d.m.Y',
    timepicker: false,
    dayOfWeekStart: 1,
  });

  $('.phone-mask').mask('+7 (000) 000-00-00');

  $('.selectpicker').each(function () {
    var self = $(this);
    var placeholder = self.data('placeholder');

    if (placeholder.length > 0) {
      self.select2({
        width: '100%',
        placeholder: placeholder,
      });
    } else {
      self.select2({
        width: '100%'
      });
    }

    self.change(function() {
      self.trigger('input')
    });
  });

  $('.selectpicker-no-search').select2({
    minimumResultsForSearch: -1,
    width: '100%'
  });

  initCalendarSidebar();

  $(document).on('click', '.validation-btn', function() {
    $(this).closest('form').parsley();
  });

  $(".slider").each(function () {

    var $slider = $(this).find('.slider__init');
    var $buttonLeft = $(this).find('.slider__button_left');
    var $buttonRight = $(this).find('.slider__button_right');

    $slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $buttonLeft,
      nextArrow: $buttonRight,
    });
  });
});