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
        tasks: ["sass", "autoprefixer", "cssmin"]
      }
    },
    uglify: {
      dist: {
        options: { },
        files: {
          "content/themes/ericrange-v1/assets/js/scripts.min.js": [
            "content/themes/ericrange-v1/assets/js/vendor/*.js"
          ],
        }
      }
    },
    autoprefixer: {
      dist: {
          files: {
              "content/themes/ericrange-v1/assets/css/prefixed.styles.min.css":
                "content/themes/ericrange-v1/assets/css/styles.min.css",
              "content/themes/ericrange-v1/assets/css/prefixed.defaults.css":
                "content/themes/ericrange-v1/assets/css/defaults.css"
          }
      }
    },
    cssmin: {
      dist: {
        files: {
          "content/themes/ericrange-v1/assets/css/prefixed.defaults.min.css": 
            ["content/themes/ericrange-v1/assets/css/prefixed.defaults.css"]
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("scss", ["sass"]);
  grunt.registerTask("js", ["uglify"]);
};
