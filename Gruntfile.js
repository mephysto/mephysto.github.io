/*
TO DO
*/

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
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
        browsers: ['last 2 version', 'ie 9']
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
      build: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'img/build/'
        }]
      }
    },

    // watch for changes in files
    watch: {
      // watch for changes in CSS
      styles : {
        options: {
          atBegin: true
        },
        files: ["./css/*.less"],
        tasks: ['makestyles']
      },
      // watch for changes in script
      scripts : {
        options: {
          atBegin: true
        },
        files: ['js/*.js'],
        tasks: ['makescripts']
      },
      // watch for updates in images
      images : {
        options: {
          atBegin: true
        },
        files: ['images/src/**/*.{png,jpg,gif}'],
        tasks: ['makeimages']
      },
      reload: {
        options: {
          atBegin: true,
          livereload: true
        },
        files: ['<%= autoprefixer.single_file.dest %>'],
        tasks: []
      }
    }
  });

  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /* ## Build site */
  grunt.registerTask('build', [], function () {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.task.run('less', 'autoprefixer', 'uglify', 'newer:imagemin');
  });

  // start watching for changes in LESS
  grunt.registerTask('makestyles', [], function () {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.task.run('less', 'autoprefixer');
  });

  // start watching for changes in JS
  grunt.registerTask('makescripts', [], function () {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.task.run('uglify');
  });

  // start watching for changes in image folder
  grunt.registerTask('makeimages', [], function () {
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.task.run('newer:imagemin');
  });

  grunt.registerTask('default', ['watch']);

};