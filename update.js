var fs   = require("fs");
var exec = require("child_process").exec;
var file = __dirname + "/package.json";

fs.readFile(file, "utf8", function (err, data) {
	if (err) {
		console.log("Error: " + err);
		return;
	}

	PackageFile = JSON.parse(data);

	var PackageProps = {
		"dependencies":         "--save",
		"devDependencies":      "--save-dev",
		"optionalDependencies": "--save-optional"
	}

	for (var PackageProp in PackageProps) {
		if (PackageProps.hasOwnProperty(PackageProp)) {
			for (var Package in PackageFile[PackageProp]) {
				if (PackageFile[PackageProp].hasOwnProperty(Package)) {
					var Parameter = PackageProps[PackageProp];
					var Command = "npm install " + Package + "@latest " + Parameter;
					console.log(Command);
					exec(Command);
				}
			}
		}
	}
});