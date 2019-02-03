'use strict';

const SwaggerParser = require('swagger-parser')

module.exports = function(grunt) {

  grunt.registerTask('validate', function() {
    var done = this.async();

    SwaggerParser.validate('./api/openapi.yaml', function(err, api) {
      if (err) {
        console.error(err);
        throw err.message;
      }
      else {
        console.log("API name: %s, Version: %s", api.info.title, api.info.version);
        done();
      }
    });
  });

}
