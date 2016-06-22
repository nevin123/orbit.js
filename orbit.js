function orbit(selector) {
	//Select the element
	var self = {};
	self.selector = selector;
	self.element = document.querySelector(self.selector);

	//Set basic Styling
	self.element.style.position = 'absolute';
	self.element.style.top = "50%";
	self.element.style.left = "50%";
	self.element.style.margin = -self.element.offsetHeight/2+'px '+ -self.element.offsetWidth/2+"px";

	//Return the html
	self.html = function() {
		return self.element;
	}

	//Set the center of the rotation
	self.setCenter = function(x,y) {
		if(x == null)
			x = '50%';

		if(y == null)
			y = '50%';

		self.element.style.top = y;
		self.element.style.left = x;

		self.element.setAttribute("x", x);
		self.element.setAttribute("y", y);

		return self;
	}

	//Set the speed of the orbit
	self.setSpeed = function(speed) {
		if(speed == null)
			speed = 100;

		self.element.setAttribute("speed", speed);

		return self;
	}

	//Set the radius of the orbit
	self.setRadius = function(radius) {
		if(radius == null)
			radius = 150;

		self.element.setAttribute("radius", radius);

		return self;
	}

	//Set Parent
	self.setParent = function(parentSelector) {
		self.element.setAttribute("parent",parentSelector);

		var parentInterval;

		parentInterval = setInterval(getParentLocation, 1.5)
		self.element.setAttribute("parentInterval", parentInterval);

		return self;
	}

	//Start Orbit
	self.startOrbit = function() {
		//Check if speed is not null
		if(self.element.getAttribute("speed") == null)
			self.setSpeed();
		//Check if radius is not null
		if(self.element.getAttribute("radius") == null)
			self.setRadius();
		if(self.element.getAttribute("x") == null || self.element.getAttribute("y") == null)
			self.setCenter();


		var orbitInterval;

		orbitInterval = setInterval(rotate, 1.5);
		self.element.setAttribute("orbitInterval", orbitInterval);
		return self;
	}

	//Stop Orbit
	self.stopOrbit = function(reset) {
		clearInterval(self.element.getAttribute("orbitInterval"));

		return self;
	}

	var angle = 100;
	//Funtions
	function rotate() {
		
		//Get Values
		angle += 0.025/self.element.getAttribute("speed");
		var xOffset = self.element.getAttribute("x");
		if(xOffset.indexOf("%") >= 0) {
			xOffset = parseFloat(xOffset)/100*window.innerWidth;
		} else {
			xOffset = parseFloat(xOffset);
		}
		var yOffset = self.element.getAttribute("y");
		if(yOffset.indexOf("%") >= 0) {
			yOffset = parseFloat(yOffset)/100*window.innerHeight;
		} else {
			yOffset = parseFloat(yOffset);
		}

		self.element.style.top = yOffset + Math.sin(angle)*self.element.getAttribute("radius") + "px";
		self.element.style.left = xOffset + Math.cos(angle)*self.element.getAttribute("radius") + "px";
	}

	function getParentLocation() {

		var parent = {};
		parent.selector = self.element.getAttribute("parent");
		parent.element = document.querySelector(parent.selector);

		
		self.element.setAttribute("x", parent.element.style.left);
		self.element.setAttribute("y", parent.element.style.top);
	}

	return self;
}