module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dribbble/application.css': 'dribbble/src/application.sass' // 'destination': 'source'
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/**/*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

}
