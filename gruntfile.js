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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("default", ["watch"]);
};
