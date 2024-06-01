function draw() {
    image(video, 0, 0, 600, 500);

    Fill("#FF0000");
    stroke("#FF000");

    if(scoreLeftWrist > 0.2)
{
    Circle(leftWristX, leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    leftWristY_divide_100 = remove_decimals/1000;
    volume = leftWristY_divide_1000 *2;
    document.getElementById("volume").innerHTML = "Volume =" + volume;
    song.setVolume(volume);
}
}
fill("#FF0000");
stroke("FF0000");

if(scoreRightWrist > 0.2)
    {
        circle(rightWristX,rightWristY,20);

        if(rightWristY >0 && rightWristY <= 100){
            document.getElementById("speed").innerHTML = "Speed = 0.5x";
            song.rate(0.5);}

        else if(rightWristY > 100 && rightWristY <=200)
            {
                document.getElementById("speed").innerHTML = "Speed = 1x";
                song.rate(1);
            } 
            else if(rightWristY > 200 && rightWristY <=300)
            {
                document.getElementById("speed").innerHTML = "1.5x";
                song.rate(1.5);
            }
        else if(rightWristY > 400 && rightWristY <=300)
{
    document.getElementById("speed").innerHTML = "Speed = 2.5x";
    song.rate(2.5);
}}