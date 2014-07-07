/**
 * @author romani4 <dima.romanov.1990@gmail.com>
 * @requires Desk
 */

var App = (function() {
    'use strict';

    var defaultSettings = {
        xSize: 10,
        ySize: 10,


        cycleDuration: 500,
        snakeDefaultSize: 3,
        snakeIncrementalSize: 5,

        unitSize: 10,
        deskBackgroundColor: 'lightgreen',
        snakeBodyColor: 'black',
        snakeHeadColor: 'black'
    };

    function App(settings) {
        this.settings = defaultSettings; // TODO: extend
        this.settings.canvasElement = document.getElementById('canvas');

        this.desk = new Desk(this);
        this.snake = new Snake(this);

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
