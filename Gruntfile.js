module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'css/main.css': 'css/main.scss',
          }
        }
    },
    
    cssmin: {
      target: {
            src: ['css/*.css'],
            dest: 'css/main.min.css',
            ext: '.min.css'
      }
    },

    uglify: {
      options: {
          mangle: true
      },
      my_target: {
        files: {
          'js/app.min.js': ['js/main.js']
          }
        }
    },

      watch: {
          scripts: {
              files: ['css/*.scss', 'css/main.css', 'js/main.js', '**/*.html', '*.html'],
              tasks: ['sass', 'cssmin','uglify','htmlmin'],
              options: {
                  spawn: false
              }
          }

      },

      htmlmin: {                                     // Task
          dist: {                                      // Target
              options: {                                 // Target options
                  removeComments: true,
                  collapseWhitespace: true
              },
              files: {
                  'html/index.html'             : 'index.html',
                  'html/kontakt/index.html'     : 'kontakt/index.html',
                  'html/laboratorij/index.html' : 'laboratorij/index.html',
                  'html/djelatnosti/index.html' : 'djelatnosti/index.html'
              }
          }
      }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');



  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin','uglify','htmlmin','watch']);

};


