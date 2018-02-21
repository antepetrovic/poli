module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    cssmin: {
      target: {
           src: ['css/*.css'],
          dest: 'dist/main.min.css',
          ext: '.min.css'
      }
    },

    uglify: {
      options: {
          mangle: true
      },
      my_target: {
        files: {
          'dist/app.min.js': ['js/main.js']
          }
        }
    },

      watch: {
          scripts: {
              files: ['css/main.css', 'js/main.js', '**/*.html', '*.html'],
              tasks: ['cssmin','uglify','htmlmin'],
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
                  'dist/index.html'             : 'index.html',
                  'dist/kontakt/index.html'     : 'kontakt/index.html',
                  'dist/laboratorij/index.html' : 'laboratorij/index.html',
                  'dist/djelatnosti/index.html' : 'djelatnosti/index.html'
              }
          }
      }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');



  // Default task(s).
  grunt.registerTask('default', ['cssmin','uglify','htmlmin','watch']);

};


