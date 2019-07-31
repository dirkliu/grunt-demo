module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    versionjson: {
      files: {
        src:["src/a.js"]
      }
    }		
	});

	grunt.loadNpmTasks('grunt-versionjson');

	grunt.registerTask('default', ['versionjson']);
}
