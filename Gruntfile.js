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
				tasks: ["sass", "autoprefixer", "cssmin", "compress:main"]
			},
			coffee: {
				files: "content/themes/ericrange-v1/assets/coffee/**/*.coffee",
				tasks: ["coffee", "jshint", "uglify", "compress:main"]
			}
		},

		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					"content/themes/ericrange-v1/assets/js/sync-scripts.min.js": [
						"content/themes/ericrange-v1/bower/platform/platform.js"
					],
					"content/themes/ericrange-v1/assets/js/async-scripts.min.js": [
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
					"content/themes/ericrange-v1/assets/css/prefixed-styles.min.css": "content/themes/ericrange-v1/assets/css/styles.min.css",
					"content/themes/ericrange-v1/assets/css/prefixed-defaults.css": "content/themes/ericrange-v1/assets/css/defaults.css"
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
					"content/themes/ericrange-v1/assets/css/prefixed-defaults.min.css": ["content/themes/ericrange-v1/assets/css/prefixed-defaults.css"],
					"content/themes/ericrange-v1/assets/css/prefixed-styles.min.css": ["content/themes/ericrange-v1/assets/css/prefixed-styles.min.css"]
				}
			}
		},

		jshint: {
			all: ["Gruntfile.js", "content/themes/ericrange-v1/assets/js/scripts.js"]
		},

		htmlmin: {                                     // Task
			dist: {                                      // Target
				options: {                                 // Target options
					/*removeComments: true,
					collapseWhitespace: true,
					minifyJS: true,
					minifyCSS: true*/
				},
				files: [{
					expand: true,
					cwd: "content/themes/ericrange-v1/bower/", 
					src: ["**/*.html"],
					dest: "content/themes/ericrange-v1/bower/"
				}]
			}
		},

		compress: {
			main: {
				options: {
					mode: 'gzip',
					level: 9
				},
				files: [
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/assets/',
						src: ['**/*.min.js'],
						dest: 'content/themes/ericrange-v1/assets/',
						ext: '.min.js.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/assets/',
						src: ['**/*.min.css'],
						dest: 'content/themes/ericrange-v1/assets/',
						ext: '.min.css.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/assets/',
						src: ['**/*.min.js.map'],
						dest: 'content/themes/ericrange-v1/assets/',
						ext: '.min.js.map.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/assets/',
						src: ['**/*.min.css.map'],
						dest: 'content/themes/ericrange-v1/assets/',
						ext: '.min.css.map.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/assets/',
						src: ['**/*.eot'],
						dest: 'content/themes/ericrange-v1/assets/',
						ext: '.eot.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/assets/',
						src: ['**/*.woff'],
						dest: 'content/themes/ericrange-v1/assets/',
						ext: '.woff.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/assets/',
						src: ['**/*.ttf'],
						dest: 'content/themes/ericrange-v1/assets/',
						ext: '.ttf.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/assets/',
						src: ['**/*.svg'],
						dest: 'content/themes/ericrange-v1/assets/',
						ext: '.svg.gz'
					}
				]
			},
			polymer: {
				options: {
					mode: 'gzip',
					level: 9
				},
				files: [
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/bower/',
						src: ['**/*.js'],
						dest: 'content/themes/ericrange-v1/bower/',
						ext: '.js.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/bower/',
						src: ['**/*.css'],
						dest: 'content/themes/ericrange-v1/bower/',
						ext: '.css.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/bower/',
						src: ['**/*.js.map'],
						dest: 'content/themes/ericrange-v1/bower/',
						ext: '.js.map.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/bower/',
						src: ['**/*.css.map'],
						dest: 'content/themes/ericrange-v1/bower/',
						ext: '.css.map.gz'
					},
					{
						expand: true,
						cwd: 'content/themes/ericrange-v1/bower/',
						src: ['**/*.html'],
						dest: 'content/themes/ericrange-v1/bower/',
						ext: '.html.gz'
					}
				]
			}
		},

		vulcanize: {
			default: {
				options: {
					
				},
				files: {
					"content/themes/ericrange-v1/assets/build.html": "content/themes/ericrange-v1/assets/polymer-build.html"
				}
			}
		},

		htmllint: {
			your_target: {
				options: {
					
				},
				src: [
					'content/themes/ericrange-v1/bower/**/*.html'
				]
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
	grunt.loadNpmTasks('grunt-vulcanize');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-htmllint');

	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("htmllint", ["htmllint"]);
	grunt.registerTask("scss", ["sass"]);
	grunt.registerTask("gzip", ["compress:main"]);
	grunt.registerTask("gzippolymer", ["compress:polymer"]);
	grunt.registerTask("html", ["htmlmin"]);
	grunt.registerTask("poly", ["vulcanize"]);
	grunt.registerTask("js", ["coffee", "jshint", "uglify"]);
};
