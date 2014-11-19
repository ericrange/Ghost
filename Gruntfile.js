module.exports = function (grunt) {
	grunt.initConfig({

		sass: {
			dist: {
				options: {
					style: "compressed"
				},
				src: [
					"content/themes/ericrange-v1/assets/scss/global.scss"
				],
				dest: "content/themes/ericrange-v1/assets/css/styles.min.css"
			}
		},

		watch: {
			css: {
				files: "content/themes/ericrange-v1/assets/scss/**/*.scss",
				tasks: ["sass", "autoprefixer", "cssmin"]
			},
			coffee: {
				files: "content/themes/ericrange-v1/assets/coffee/**/*.coffee",
				tasks: ["coffee", "jshint", "uglify"]
			}
		},

		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					"content/themes/ericrange-v1/assets/js/sync.scripts.min.js": [
						"content/themes/ericrange-v1/bower/platform/platform.js"
					],
					"content/themes/ericrange-v1/assets/js/async.scripts.min.js": [
						"content/themes/ericrange-v1/bower/jquery/dist/jquery.min.js",
						"content/themes/ericrange-v1/assets/js/scripts.js",
						"content/themes/ericrange-v1/assets/js/vendor/*.js"
					],
				}
			}
		},

		autoprefixer: {
			dist: {
				files: {
					"content/themes/ericrange-v1/assets/css/prefixed.styles.min.css": "content/themes/ericrange-v1/assets/css/styles.min.css",
					"content/themes/ericrange-v1/assets/css/prefixed.defaults.css": "content/themes/ericrange-v1/assets/css/defaults.css"
				}
			}
		},

		coffee: {
			compile: {
				options: {
					join: true,
					bare: true
				},
				files: {
					"content/themes/ericrange-v1/assets/js/scripts.js": [
						"content/themes/ericrange-v1/assets/coffee/modal.coffee",
						"content/themes/ericrange-v1/assets/coffee/subscription.coffee"
					]
				}
			},
		},

		cssmin: {
			dist: {
				files: {
					"content/themes/ericrange-v1/assets/css/prefixed.defaults.min.css": ["content/themes/ericrange-v1/assets/css/prefixed.defaults.css"]
				}
			}
		},

		jshint: {
			all: ["Gruntfile.js", "content/themes/ericrange-v1/assets/js/scripts.js"]
		},

		htmlmin: {                                     // Task
			dist: {                                      // Target
				options: {                                 // Target options
					removeComments: true,
					collapseWhitespace: true,
					minifyJS: true,
					minifyCSS: true
				},
				files: [{
					expand: true,
					cwd: "content/themes/ericrange-v1/bower/", 
					src: ["**/*.html"],
					dest: "content/themes/ericrange-v1/assets/html/"
				}]
			}
		}

	});
	
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");

	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("scss", ["sass"]);
	grunt.registerTask("html", ["htmlmin"]);
	grunt.registerTask("js", ["coffee", "jshint", "uglify"]);
};
