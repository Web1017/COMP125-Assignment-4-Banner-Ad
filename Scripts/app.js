/// <reference path="objects/label.ts"/>
/// <reference path="objects/button.ts"/>
/**
 * FileName: app.js
 * @Author Javid Niftaliyev
 * Student ID: 300742916
 * @description: This is the main javascript file for the current web site.
 * Website(Azure):
 * Website(Github):
 *
 */
//IIFE - Immediately invoked Expression 
var core;
(function (core) {
    "use strict"; //doesnt allow variables to be redeclared
    var canvas;
    var stage;
    core.CANVAS_WIDTH = 300;
    core.CANVAS_HEIGHT = 250;
    var fLabel;
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;
    var newButton;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        canvas.setAttribute("width", "300");
        canvas.setAttribute("height", "250");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
    }
    /**
     * Utility Method to set the bounds of an object
     *
     * @param {number} axis
     * @param {number} boundary
     * @returns {number}
     */
    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }
    /**
        * Event method that triggers every frame
        *
        * @method gameLoop
        */
    function gameLoop() {
        // checkbounds for x and y
        fLabel.x = checkBounds(fLabel.x, core.CANVAS_WIDTH);
        //   fLabel.y = checkBounds(fLabel.y, CANVAS_HEIGHT);
        // change direction and speed for x and y
        /*      if ((fLabel.y == CANVAS_HEIGHT) || (fLabel.y == 0)) {
                  dy = Math.floor(Math.random() * 5) + 1;
                  yDirection *= -1;
              }
      */
        if ((fLabel.x == core.CANVAS_WIDTH) || (fLabel.x == 0)) {
            dx = Math.floor(Math.random() * 5) + 1;
            xDirection *= -1;
        }
        //  fLabel.y += (yDirection * dy);
        fLabel.x += (xDirection * dx);
        stage.update(); // refresh the stage container
    }
    function newButton_clicked() {
        //  fLabel.text = (fLabel.text === "Press Here") ? "Have Fun" : "Press Here";
        window.location.href = "projects.html";
    }
    function main() {
        // Label object
        fLabel = new objects.Label("Press Here", "40px Consolas", "#000000", 180, 90, true);
        stage.addChild(fLabel);
        //Button Bitmap
        newButton = new objects.Button("../Assets/img/book6.png", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.8, true);
        stage.addChild(newButton);
        newButton.on("click", newButton_clicked);
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map