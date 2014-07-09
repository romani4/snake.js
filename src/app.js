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
        this.snake.move( );
        this.desk.redraw();
    };

    App.prototype.onkeydown = function(ev){
        var keyCode = ev.keyCode;
        if(keyCode >= 37 && keyCode <=40){
            this.snake.turn(keyCode);
        }
    };

    return App;
})();

(function(){
    this.onload = function() {
        var app = new App( {} );
        this.onkeydown = function(ev){app.onkeydown(ev)};
    }


}).call(window);
