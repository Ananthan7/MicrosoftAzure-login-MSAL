/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.loadNpmTasks('grunt-war');
    // Project configuration.
    var project = grunt.option('project'), projectName, projectVersion;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        war: {
            target: {
                options: {
                    war_dist_folder: 'build', /* Folder where to generate the WAR. */
                    war_name: 'SPICE_TestApp_2.0.0.0',
                    webxml_display_name: 'SPICE_TestApp'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'dist/test',
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', ['war']);
};
