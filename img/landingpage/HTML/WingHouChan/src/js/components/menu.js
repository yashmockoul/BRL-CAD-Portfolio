// Menu
// menu.js

// Scripts for the menu

var Menu = {
  init: function() {
    var self = this;
    self.page = $('body');
    self.menu = $('nav.global');
    self.menu_toggle = $('.menu-toggle');
    self.toggle();
  },

  toggle: function() {
    var self = this;
    self.menu_toggle.click(function() {
      if(self.menu.css('right') != '0px') {
        self.menu.css('right', 0);
        self.page.css('overflow', 'hidden');
      } else {
        self.menu.css('right', '-100%');
        self.page.css('overflow', '');
      };
      return false;
    });
  }
};

Menu.init()
