var point = /** @class */ (function () {
    function point(x, y) {
        this.x = x;
        this.y = y;
    }
    point.prototype.draw = function () {
        console.log('X:' + this.x + ', Y:' + this.y);
    };
    return point;
}());
var point = new PointerEvent(1, 2);
point.x = 3;
point.draw();
