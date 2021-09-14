class ComputerArcher {

    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body);

        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/computerArcher.png");
        Matter.Body.setAngle(this.body, 90);
        this.collapse=false;
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        /*if (keyIsDown(UP_ARROW) && angle < -103) {
            angle -= 1;
            Matter.Body.setAngle(this.body,angle)
        }


        if (keyIsDown(DOWN_ARROW) && angle > -35) {
            angle += 1;
            Matter.Body.setAngle(this.body,angle)
        }
*/

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()

    }

}
