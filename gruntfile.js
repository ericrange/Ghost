module.exports = function (grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/styles.css': 'scss/styles.scss'
				}
			}
		},
		watch: {
			styles: {
				files: ['scss/styles.scss'],
				tasks: ['sass']
			},
		},
		cssmin: {
			options: {

			},
			target: {
				files: {
					'css/styles.css': ['css/styles.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask("default", ["watch"]);
};
