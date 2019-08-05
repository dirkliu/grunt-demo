var path = require('path');
var fs = require('fs')
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

    tplversion: {
      files: {
        src: ["src/tpls/*.tpl"]
      }
    },

    versionjson: {
      options: {
        fileType: 'php'
      },
      files: {
        src:["dist/*.min.js"]
      }
    }		
	});

  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-versionjson');

  grunt.registerMultiTask('tplversion', 'tpl version compilier', function () {
    var versionjson = grunt.file.readJSON('version.json')
    this.files.forEach(function (filePair) {
      filePair.src.forEach(function(f) {
        var data = fs.readFileSync(f, 'utf-8')
        Object.keys(versionjson).forEach(key => {
          data = data.replace(new RegExp('\{__' + key + '__\}', 'gm'), key + '?' + versionjson[key])
        })
        // console.log('data regexp:', data.match(/\{__([\w\.\_\-]+)__\}/))
        fs.writeFileSync(f, data)
      })
    })
  })

	grunt.registerTask('default', ['uglify', 'versionjson']);
}
