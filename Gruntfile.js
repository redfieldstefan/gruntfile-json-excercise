'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({

		jshint: {
			
			dev:{
				src:['Gruntfile.js', 'greet*.js', 'test/**/*.js']
			},

			options: {
				jshintrc: true
			}
			
		},

		simplemocha: {
			dev:{
				src:['test/**/*.js']
			}
		},

		watch: {
			files:['Gruntfile.js', 'greet*.js', 'test/**/*.js'],
			tasks:['jshint:dev']
		}

	});
	grunt.registerTask('test', ['jshint:dev', 'simplemocha:dev']);
	grunt.registerTask('default', ['test']);
};