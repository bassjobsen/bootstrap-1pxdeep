/*!
 */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };


  var config = {
    bower: { path: 'bower_components/'}
  }
  
  var mq4HoverShim = require('mq4-hover-shim');
  //var autoprefixerSettings = require(config.bower.path + 'bootstrap/grunt/autoprefixer-settings.js');
  //var autoprefixer = require('autoprefixer')(autoprefixerSettings);
  var autoprefixer = require('autoprefixer');
  // Project configuration.
  grunt.initConfig({
    
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    config: config,
    // Task configuration.
    sass: {
      options: {
        includePaths: [config.bower.path ],
        precision: 6,
        sourceComments: false,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: {
          'dist/css/bootstrap-1pxdeep.css': 'scss/bootstrap-1pxdeep.scss'
        }
      }
    },

    // CSS build configuration
    scsslint: {
      options: {
        bundleExec: true,
        config: 'scss/.scss-lint.yml',
        reporterOutput: null
      },
      core: {
        src: ['scss/*.scss']
      }
    },

    postcss: {
      core: {
        options: {
          map: true,
          processors: [
            mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.bs-true-hover ' }),
            autoprefixer
          ]
        },
        src: 'dist/css/*.css'
      }
    },
    cssmin: {
      options: {
        // TODO: disable `zeroUnits` optimization once clean-css 3.2 is released
        //    and then simplify the fix for https://github.com/twbs/bootstrap/issues/14837 accordingly
        compatibility: 'ie9',
        keepSpecialComments: '*',
        sourceMap: true,
        advanced: false
      },
      core: {
        files: [
          {
            expand: true,
            cwd: 'dist/css',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/css',
            ext: '.min.css'
          }
        ]
      }
    } 
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {});
  require('time-grunt')(grunt);
      

  grunt.registerTask('compile-sass', ['sass', 'postcss','cssmin']);

  // Default task.
  grunt.registerTask('default', ['compile-sass']);
};
