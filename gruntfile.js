module.exports = function (grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					"css/styles.css": "scss/styles.scss"
				}
			}
		},
		watch: {
			styles: {
				files: ["scss/styles.scss"],
				tasks: ["sass", "cssmin"]
			},
			html: {
				files: ["_site/html.index"],
				tasks: ["htmlmin"]
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: false
			},
			target: {
				files: {
					'css/styles.css': ['css/styles.css']
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					removeEmptyAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true
				},
				files: {
					"_site/index.html": "_site/index.html"
				}
			}
		},
		compress: {
			html: {
				options: {
					mode: "gzip"
				},
				expand: true,
				cwd: "_site/",
				src: ["**/*.html"],
				dest: "_site/",
				ext: ".html.gz"
			},
			jpg: {
				options: {
					mode: "gzip"
				},
				expand: true,
				cwd: "_site/",
				src: ["**/*.jpg"],
				dest: "_site/",
				ext: ".jpg.gz"
			},
			css: {
				options: {
					mode: "gzip"
				},
				expand: true,
				cwd: "_site/",
				src: ["**/*.css"],
				dest: "_site/",
				ext: ".css.gz"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-compress");
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask("html", ["htmlmin"]);
	grunt.registerTask("gzip", ["compress"]);


	grunt.registerTask("default", ["watch"]);
};
