function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    player1.move();
        ennemy2.accelerate(moveDistance)
        ennemy2.move();
    /*else if (delta > 2 && delta < 10)
    {
        rotateAngle = Math.PI * delta * 2;
        ennemy2.turnLeft(rotateAngle);
        ennemy2.move();
    }
    else{
        ennemy2.accelerate(moveDistance);
        ennemy2.move();
    }*/
    controls.update();
}