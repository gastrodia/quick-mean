module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    meta: {
      banner: '/*! Express.js Hello Boilerplate <%= pkg.version %> - <%= pkg.homepage %> */'
    },
    less: {
      development: {
          options: {
              paths: ["assets/css"]
          },
          files: {
              'src/main.css': [
                  'components/bootstrap/less/bootstrap.less',
                  'components/bootstrap/less/responsive.less',
                  'public/css/less/app.less'
              ]
          }
      },
      production: {
          options: {
              paths: ["assets/css"],
              cleancss: true
             /* modifyVars: {
                  imgPath: '"http://mycdn.com/path/to/images"',
                  bgColor: 'red'
              }*/
          },
          files: {
              'public/css/main.css': [
                  'components/bootstrap/less/bootstrap.less',
                  'components/bootstrap/less/responsive.less',
                  'public/css/less/app.less'
              ]
          }
      }
    },
    concat: {
      js: {
        src: [
          'components/jquery/jquery.min.js',
          'components/modernizr/modernizr.js'
        ],
        dest: 'public/js/scripts.js'
      }
    },
    bower: {
      target: {
          rjsConfig: 'public/js/config.js'
      }
    },
    watch: {
      files: ['public/css/less/*.less', 'public/css/less/bootstrap/*.less'],
      tasks: 'default'
    }
  });

  grunt.registerTask('default', ['less','concat','bower']);

};