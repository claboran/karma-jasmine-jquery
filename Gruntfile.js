module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-karma');
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      unit: {
        configFile: 'test/config/karma.conf.js',
        runnerPort: 9999,
        singleRun: true,
        browsers: ['PhantomJS'],
        logLevel: 'ERROR'
      }
    }
  });


  // Default task(s).
  grunt.registerTask('default', ['karma']);

};