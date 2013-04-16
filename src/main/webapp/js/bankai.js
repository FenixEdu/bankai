/**********************
 * Bankai v0.0.1
 *
 * Development Team:
 *  David Martinho
 *  Pedro Santos
 *  Sérgio Silva
 **********************/

var Bankai = (function(global) {
  "use strict";

  // Define and export Bankai
  var Bankai = {};

  var Router;

  function loadRequireJS() {
    document.write('<script data-main="js/config" src="js/libs/require/require-min.js" type="text/javascript"></script>');
  }

  function loadLessJS() {
    document.write('<script src="js/libs/less/less-min.js" type="text/javascript"></script>');
  }
  
  loadLessJS();
  loadRequireJS();

  Bankai.setRouter = function(Router) {
    this.Router = Router;
  }

  Bankai.display = function(viewObject) {
    Bankai.page.show(viewObject);
  }

  Bankai.initialize = function() {
    if(Bankai.router === undefined) {
      Bankai.router = new this.Router();
    }
  }

  return Bankai;
})(this);