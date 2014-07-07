/**
 * @author romani4 <dima.romanov.1990@gmail.com>
 * @requires Desk
 */

var App = (function() {
    'use strict';

    var defaultSettings = {
        cycleDuration: 1000,
        snakeDefaultSize: 10,
        snakeIncrementalSize: 5,

        deskBackgroundColor: 'lightgreen',
        snakeBodyColor: 'black',
        snakeHeadColor: 'black'
    };

    function App(settings) {
        this.settings = defaultSettings; // TODO: extend
        this.settings.canvasElement = document.getElementById('canvas');

        this.desk = new Desk( this.settings.canvasElement, 50, 30, 10 );
        this.desk.clean( this.settings.deskBackgroundColor );

        run.call(this);
    }

    var run = function(){
        var context = this;
        var intervalId = setInterval( function(){
            var loopResult = loop.call(context);
            if( undefined !== loopResult && loopResult!==0 ){
                clearInterval(intervalId);
            }
        }, this.settings.cycleDuration );
    };

    var loop = function(){

    };

    return App;
})();

(function(){
    this.onload = function() {
        this.App = new App( {} );
    }
}).call(window);
