/**
 * @author romani4 <dima.romanov.1990@gmail.com>
 * @requires Desk
 */

var App = (function() {
    'use strict';

    var defaultSettings = {
        cycleDuration: 1000,
        snakeDefaultSize: 10,
        snakeIncrementalSize: 5
    };

    function App(settings) {
        this.settings = defaultSettings; // TODO: extend

        console.log('run');
    }

    return App;
})();

(function(){
    this.onload = function() {
        this.App = new App( {} );
    }
}).call(window);
