module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    cssmin: {
      target: {
           src: ['css/main.css'],
          dest: 'dist/main.min.css',
          ext: '.min.css'
      }
    },

    uglify: {
      options: {
      mangle: false
      },
      my_target: {
        files: {
          'dist/app.min.js': ['dist/built.js']
          }
        }
    },

      watch: {
          css: {
              files: ['css/main.css', 'app.js'],
              tasks: ['cssmin','concat', 'uglify']
          }

      },

      concat: {
          options: {
              separator: ';'
          },
          dist: {
              src: ['bioenergija.js', 'app.js'],
              dest: 'dist/built.js'
          }
      }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'concat','uglify','watch']);

};


