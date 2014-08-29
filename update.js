var fs   = require("fs");
var exec = require("child_process").exec;
var file = __dirname + "/package.json";

var Commands = [];
var CommandIndex = 0;

fs.readFile(file, "utf8", function (err, data) {
	if (err) {
		console.log("Error: " + err);
		return;
	}

	PackageFile = JSON.parse(data);

	var PackageProps = {
		/* PackageProp:         Parameter */
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
					Commands.push(Command);
				}
			}
		}
	}

	exeSync();
});

function exeSync() {
	if(Commands[CommandIndex]) {
		CommandIndex === 0 ? console.log("Start updating...") : null;
		exec(Commands[CommandIndex], function (error, stdout, stderr) {
		    if (error !== null) {
		    	console.log('exec error: ' + error);
		    } else {
		    	var Progressed = parseInt((CommandIndex + 1) * 100 / Commands.length) + "%";
		    	console.log("[" + Progressed + "] " + Commands[CommandIndex]);
		    	CommandIndex++;
		    	exeSync();
		    }
		});
	}
}