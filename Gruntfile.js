module.exports = function(grunt) {
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
        tasks: ["sass"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("scss", ["sass"]);
};