var path = require('path')
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    uglify: {
      files: {
        expand: true,
        src: ['src/*.js'],
        dest: 'dist',
        cwd: '.',
        rename: function (dst, src) {
          return dst + '/' + path.basename(src).replace('.js', '.min.js');
        }
      }
    },

    versionjson: {
      files: {
        src:["src/*.js"]
      }
    }		
	});

  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-versionjson');

	grunt.registerTask('default', ['uglify', 'versionjson']);
}
