'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({

		jshint: {
			
			dev:{
				src:['Gruntfile.js']
			},

			options: {
				node: true,
				globals: {
					describe: true,
					it: true,
					before: true,
					after: true,
					beforeEach: true,
					afterEach: true
				}
			}
		},

		simplemocha: {
			dev:{
				src:[]
			}
		},

		watch: {
			files:['Gruntfile.js'],
			tasks:['jshint:dev']
		}

	});
	grunt.registerTask('test', ['jshint:dev', 'simplemocha:dev']);
	grunt.registerTask('eye', ['watch']);
	grunt.registerTask('default', ['test']);
};