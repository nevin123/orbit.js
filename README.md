## Orbit.js

Orbit.js is a simple library that makes html elements orbit on a specific location on your website.
It is even possible to make elements orbit around other elements.

## Code Example

There are different function that can be used while using this library.

You start by selecting the element, this is done the same like JQuery. For example:
```javascript
orbit('#element');
orbit('.element');
orbit('#element .element');
```
You can change the orbit location with the code below. As input you can use pixels or percentage
```javascript
orbit('#element').setCenter('50%','250px');
```

You can also set the radius or the rotation in pixels and the speed in seconds (for 360deg). The values for radius and speed can also be negative values.
```javascript
orbit('#element').setRadius(200).setSpeed(-5);
```

You can also set the parent instead of the position, this makes the element always orbit around that element
```javascript
orbit('#element').setParent("#otherElement");
```

To start or stop the orbit you can use this:
```javascript
orbit('#element').startOrbit();
orbit('#element').startOrbit();
```

So in the end you can get something like this:

```javascript
	orbit('#first').setCenter('50%','50%').setRadius(200).setSpeed(5).startOrbit();
	orbit('#second').setRadius(150).setSpeed(-7).setParent("#first").startOrbit();
	orbit('#third').setRadius(100).setSpeed(8).setParent("#second").startOrbit();
	orbit('#fourth').setRadius(80).setSpeed(-5).setParent("#second").startOrbit();
	orbit('#fifth').setRadius(60).setSpeed(1).setParent("#second").startOrbit();
```

## Installation

Installing the library into your website is simple. 
You could add the orbit.js file to your website and use this code:

```html
<script src="/path/to/orbit.js"></script>
```

Or you could simple add this code:

```html
<script src="http://nevinwouters.com/fhict/orbitjs/orbit.js"></script>
```

## Demo

You can watch a simple example here:
[nevinwouters.com/fhict/orbitjs/index.html](http://nevinwouters.com/fhict/orbitjs/)

This is accomplished by following code:
```html
<script>
	window.onload = function() {
		orbit('#first').setCenter('50%','50%').setRadius(200).setSpeed(5).startOrbit();
		orbit('#second').setRadius(150).setSpeed(-7).setParent("#first").startOrbit();
		orbit('#third').setRadius(100).setSpeed(8).setParent("#second").startOrbit();
		orbit('#fourth').setRadius(80).setSpeed(-5).setParent("#second").startOrbit();
		orbit('#fifth').setRadius(60).setSpeed(1).setParent("#second").startOrbit();
	}
</script>
```