/**
 * Created by Jacob on 2014/8/26.
 */


module.exports = function(grunt) {
 grunt.loadNpmTasks('grunt-karma');
    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        karma: {
            options :{
                 configFile: 'karma.conf.js', 
                 runnerPort: 9999,
                 browsers: ['Chrome'],
            },
              unit: {
                singleRun: true,
                autoWatch: false,
                logLevel: 'ERROR'
              },
              dev: {
                singleRun: false,
                autoWatch: true,
                logLevel: 'DEBUG'
              }
            }
    });
	
    // 默认被执行的任务列表。
    grunt.registerTask('dev', ['karma:dev']);
    grunt.registerTask('default', ['karma:unit']);
};
