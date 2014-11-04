module.exports = function (grunt) {
	grunt.initConfig({

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {

				}
			}
		},

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
			}
		},

		uglify: {
			dist: {
				options: {},
				files: {
					"content/themes/ericrange-v1/assets/js/sync.scripts.min.js": [
						"content/themes/ericrange-v1/bower/platform/platform.js"
					],
					"content/themes/ericrange-v1/assets/js/async.scripts.min.js": [
						"content/themes/ericrange-v1/bower/jquery/dist/jquery.min.js",
						"content/themes/ericrange-v1/assets/js/script.js",
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

		cssmin: {
			dist: {
				files: {
					"content/themes/ericrange-v1/assets/css/prefixed.defaults.min.css": ["content/themes/ericrange-v1/assets/css/prefixed.defaults.css"]
				}
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("scss", ["sass"]);
	grunt.registerTask("js", ["uglify"]);
};
