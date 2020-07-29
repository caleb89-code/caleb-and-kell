function setup() {

}



function draw() {
	background(225);
	
	// thing you move
	fill(0, 255, 0);
	ellipse(mouseX, mouseY, 100);
	
	// big wheel
	fill(255);
	ellipse(350, 250, 100);
	
	// weird moving line
	fill(0);
	strokeCap(square);
	line(mouseX, mouseY, xrot+59, yrot+50);
	
	// make it spin
	xrot += Math.cos((PI/2) * t) * 8;
	yrot += Math.sin((PI/2) * t) * 8;
	t += 0.1;
}