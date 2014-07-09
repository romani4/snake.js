/**
 * @author romani4 <dima.romanov.1990@gmail.com>
 */

/* finally */
var SNAKE_DIRECTION  = {
    UP:38,
    RIGHT:39,
    DOWN:40,
    LEFT:37
};

var Snake = (function(){
    'use strict';

    function Snake(app){
        this.app = app;
        this._direction = SNAKE_DIRECTION.RIGHT;
        for(var item=0; item<app.settings.snakeDefaultSize; item++){
            this.push({
                x: item,
                y: 0
            });
        }
        this._isTurned = false;
    }

    Snake.prototype = [];

    Snake.prototype.turn = function (direction) {
        if(direction === this._direction || this._isTurned){
            return;
        }

        if( (SNAKE_DIRECTION.UP===direction    && SNAKE_DIRECTION.DOWN!==this._direction )||
            (SNAKE_DIRECTION.RIGHT===direction && SNAKE_DIRECTION.LEFT!==this._direction ) ||
            (SNAKE_DIRECTION.DOWN===direction  && SNAKE_DIRECTION.UP!==this._direction ) ||
            (SNAKE_DIRECTION.LEFT===direction  && SNAKE_DIRECTION.RIGHT!==this._direction ) )
        {
            this._direction = direction;
            this._isTurned = true;
        }
    };

    Snake.prototype.move = function () {
        var lastTailPosition = this.shift();
        var currentHead = this.head();
        var xSize = this.app.settings.xSize;
        var ySize = this.app.settings.ySize;

        switch(this._direction){
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
                    x: (currentHead.x-1 >= 0)? currentHead.x-1: xSize-1,
                    y: currentHead.y
                });
                break;
            default:
                console.log('Unknown direction');
                break;
        }
        this._isTurned = false;
    };

    Snake.prototype.head = function () {
        return this[ this.length-1 ];
    };

    Snake.prototype.tail = function () {
        return this[ 0 ];
    };

    return Snake;
})();
