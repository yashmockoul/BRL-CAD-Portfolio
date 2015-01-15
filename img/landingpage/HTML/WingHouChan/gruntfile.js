module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Concatenation Task Config
    concat: {
      // Development only config
      dev: {
        // Concatenate all JS files in src/js/components
        src: 'src/js/components/**/*.js',
        // Compile in scripts.js under the src directory (not under assets directory)
        dest: 'src/js/scripts.js'
      },
      // Production only config
      prod: {
        // Concatenate all JS files in src/js/components
        src: 'src/js/components/**/*.js',
        // Compile in scripts.js under the assets directory (not under src directory)
        dest: 'assets/js/scripts.js'
      }
    },

    // Sass Compile Task Config
    sass: {
      // Development only config
      dev: {
        options: {
          // lineNumbers: true, style: 'expanded'
          // Makes debugging Sass/CSS easier
          lineNumbers: true,
          style: 'expanded'
        },
        files: {
          // Compile Sass into style.css under src directory (not under assets directory)
          'src/css/style.css': 'src/scss/style.scss'
        }
      },
      // Production only config
      prod: {
        files: {
          // Compile Sass into style.css under assets directory (not under src directory)
          'assets/css/style.css': 'src/scss/style.scss'
        }
      }
    },

    // Uglify Task Config
    uglify: {
      js: {
        files: {
          'assets/js/scripts.js': 'src/js/scripts.js'
        }
      }
    },

    // Grunt Watch Task Config
    // Development only
    watch: {
      js: {
        files: 'src/js/**/*.js',
        tasks: ['concat:dev'],
      },
      sass: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass:dev'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('prod', ['concat:prod', 'sass:prod', 'uglify']);
};