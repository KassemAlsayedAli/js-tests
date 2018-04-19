// see
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

var MODULE = (function () {
	var my = {}, privateVariable = 1;

	function privateMethod() {
		// ...
	}

	my.moduleProperty = 1;
	my.moduleMethod = function () {
            privateVariable++;
            return privateVariable;
	};

	return my;
}());



//Augmentation

//One limitation of the module pattern so far is that the entire module must be in one file. Anyone who has worked in a large code-base understands the value of splitting among multiple files. Luckily, we have a nice solution to augment modules. First, we import the module, then we add properties, then we export it. Here’s an example, augmenting our MODULE from above:

var MODULE_AUGMENTED = (function (my) {
	my.anotherMethod = function () {
		return 'hi kass';
	};

	return my;
}(MODULE));
