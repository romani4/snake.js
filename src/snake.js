/**
 * @author romani4 <dima.romanov.1990@gmail.com>
 */

/* finally */
var SNAKE_DIRECTION  = {
    UP:0,
    RIGHT:1,
    DOWN:2,
    LEFT:3
};

var Snake = (function(){
    'use strict';

    function Snake(app){
        this.app = app;
        this.direction = SNAKE_DIRECTION.DOWN;
        this.isInitDraw = true;
        for(var item=0; item<app.settings.snakeDefaultSize; item++){
            this.push({
                x: item,
                y: 0
            });
        }
    }

    Snake.prototype = [];

    Snake.prototype.turn = function (direction) {
        switch (direction){
            case SNAKE_DIRECTION.UP:
            case SNAKE_DIRECTION.RIGHT:
            case SNAKE_DIRECTION.DOWN:
            case SNAKE_DIRECTION.LEFT:
                this.direction = direction
                break;
            default:
                console.log('Unknown direction');
                break;
        }
    };

    Snake.prototype.move = function () {
        var lastTailPosition = this.shift();
        var currentHead = this.head();
        var xSize = this.app.settings.xSize;
        var ySize = this.app.settings.ySize;

        switch(this.direction){
            case SNAKE_DIRECTION.UP:
                this.push({
                    x: currentHead.x,
                    y: ( currentHead.y-1 >=0 )? currentHead.y-1: ySize-1
                });
                break;
            case SNAKE_DIRECTION.RIGHT:
                this.push({
                    x: (currentHead.x+1 < xSize)? currentHead.x+1: 0,
                    y: currentHead.y
                });
                break;
            case SNAKE_DIRECTION.DOWN:
                this.push({
                    x: currentHead.x,
                    y: (currentHead.y+1 < ySize)? currentHead.y+1: 0
                });
                break;
            case SNAKE_DIRECTION.LEFT:
                this.push({
                    x: (currentHead.x-1 >= xSize)? currentHead.x-1: xSize-1,
                    y: currentHead.y
                });
                break;
            default:
                console.log('Unknown direction');
                break;
        }
    };

    var initDraw = function() {
        var desk = this.app.desk;
        desk.clean();
        this.forEach( function(item){
            desk.putField( item.x, item.y, 'black' );
        }, this );
    };

    Snake.prototype.draw = function () {
        if(this.isInitDraw){
            this.isInitDraw = false;
            initDraw.call(this);
        }
        initDraw.call(this);// TODO: optimize draw
    };

    Snake.prototype.head = function () {
        return this[ this.length-1 ];
    };

    Snake.prototype.tail = function () {
        return this[ 0 ];
    };

    return Snake;
})();
