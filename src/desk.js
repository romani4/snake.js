/**
 * @author romani4 <dima.romanov.1990@gmail.com>
 * @requires Snake,Food,BonusFood
 */

var Desk =(function() {
    'use strict';

    function Desk(app){
        this.app = app;
        this.isInitDraw = false;
        var settings = app.settings;

        settings.canvasElement.setAttribute( 'width',
            (settings.xSize * settings.unitSize).toString()
        );

        settings.canvasElement.setAttribute( 'height',
            (settings.ySize * settings.unitSize).toString()
        );

        this.drawingArea = settings.canvasElement.getContext("2d");
    }

    Desk.prototype.clean = function(){
        var width = this.app.settings.xSize * this.app.settings.unitSize;
        var height = this.app.settings.ySize * this.app.settings.unitSize;

        this.drawingArea.fillStyle = this.app.settings.deskBackgroundColor;
        this.drawingArea.fillRect( 0, 0, width , height);
    };

    Desk.prototype.putField = function(x,y,color){
        this.drawingArea.fillStyle = color;
        this.drawingArea.fillRect(
            x*this.app.settings.unitSize + 1 , y*this.app.settings.unitSize+1,
            this.app.settings.unitSize-1 , this.app.settings.unitSize-1 );
    };

    Desk.prototype.initDraw = function(){
        this.clean();
        this.app.snake.forEach( function(item){
            this.putField( item.x, item.y, 'black' );
        }, this );
    };

    Desk.prototype.draw = function(){
        this.initDraw(); // TODO: optimize draw
    };

    Desk.prototype.redraw = function(){
        if(this.isInitDraw){
            this.isInitDraw = true;
            this.initDraw();
        }else{
            this.draw();
        }
    };

    return Desk;
})();
