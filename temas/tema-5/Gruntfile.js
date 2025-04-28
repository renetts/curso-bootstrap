module.exports = function(grunt) {

    grunt.initConfig({
      sass: {
        dist: {
          files: {
            'dist/css/style.css': 'src/scss/style.scss'
          }
        }
      },
      watch: {
        sass: {
          files: ['src/scss/**/*.scss'],
          tasks: ['sass:dist'],
          options: {
            spawn: false,
          },
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['sass:dist', 'watch']);
  };