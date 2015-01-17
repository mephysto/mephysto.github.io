/*
TO DO
*/

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    log: {

    },
    pkg: grunt.file.readJSON('package.json'),

    // process + minify LESS into CSS
    less: {
      development: {
        options: {
            paths: ["./css"]
        },
        files: {
          "./css/main.css": "./css/main.less"
        }
      }
    },
    // auto browserprefix for CSS
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      single_file: {
        options: {
           yuicompress: true
        },
        src: 'css/main.css',
        dest: 'css/global.min.css'
      },
    },
    // minify JS
    uglify: {
      build: {
        options: {
          mangle: false, // preserve variables

        },
        src: ['js/main.js'],
        dest: 'js/build/global.min.js'
      }
    },

    // optimize images
    imagemin: {
      static: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'img/build/'
        }]
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'img/build/'
        }]
      }
    },

    // Concatenate all the minified files into one big file.
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/*.js'],
        dest: 'js/build/global.min.js'
      },
    },

    // watch for changes in files
    watch: {
      // watch for changes in CSS
      styles : {
        files: ["./css/*.less"],
        tasks: ['less', 'autoprefixer']
      },
      // watch for changes in script
      scripts : {
        files: ['js/*.js'],
        tasks: ['uglify']
      },
      // watch for updates in images
      images : {
        files: ['images/src/**/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).

  /// imagmin is broken. need to find out how to fix.

  /* ## Build site */
  grunt.registerTask('default', ['less', 'autoprefixer', 'uglify', 'imagemin']);

  // start watching for changes in LESS
  grunt.registerTask('watchstyles', ['less', 'autoprefixer', 'watch:styles']);
  // start watching for changes in JS
  grunt.registerTask('watchscripts', ['uglify', 'watch:scripts']);
  // start watching for changes in image folder
  grunt.registerTask('watchimages', ['imagemin', 'watch:images']);
  // watch everything
  grunt.registerTask('watchall', ['default', 'watch']);

};