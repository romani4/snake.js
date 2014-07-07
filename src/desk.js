/**
 * @author romani4 <dima.romanov.1990@gmail.com>
 * @requires Snake,Food,BonusFood
 */

var Desk =(function() {
    'use strict';

    function Desk(canvasElement, xSize, ySize, unitSize) {
        this.canvasElement = canvasElement;
        this.xSize = xSize;
        this.ySize = ySize;
        this.unitSize = unitSize;

        this.canvasElement.setAttribute('width', xSize*unitSize);
        this.canvasElement.setAttribute('height', ySize*unitSize);
        this.drawingArea = this.canvasElement.getContext("2d");
    }

    Desk.prototype.clean = function(color){
        this.drawingArea.fillStyle = color;
        this.drawingArea.fillRect( 0, 0, this.xSize*this.unitSize, this.ySize*this.unitSize);
    };

    Desk.prototype.putField = function(x,y,color){
        this.drawingArea.fillStyle = color;
        this.drawingArea.fillRect( x*this.unitSize + 1 , y*this.unitSize+1, this.unitSize-1 , this.unitSize-1 );
    };

    return Desk;
})();
