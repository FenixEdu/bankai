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
    document.write('<script data-main="../js/config" src="../js/libs/require/require.js" type="text/javascript"></script>');
  }

  function loadLessJS() {
    document.write('<script src="../js/libs/less/less.js" type="text/javascript"></script>');
  }

  function getAllScripts() {
    return document.getElementsByTagName('script');
  }

  function each(ary, func) {
    if (ary) {
      var i;
      for (i = 0; i < ary.length; i += 1) {
        if (ary[i] && func(ary[i], i, ary)) {
          break;
        }
      }
    }
  }

  each(getAllScripts(), function(script) {
    if(script.src.indexOf("bankai.js") !== -1) {
      var appName = script.dataset.app;
      if(appName) {
        Bankai.appName = appName;
        loadLessJS();
        loadRequireJS();
      }
    }
  });


//  var bankaiScript = document.getElementById('bankai-script');

  //Bankai.appName = bankaiScript.dataset.app;

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