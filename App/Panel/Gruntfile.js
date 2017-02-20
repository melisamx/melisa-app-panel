module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: {
            appName: 'Panel',
            src: 'resources/assets/',
            output: '../../public/<%= pkg.appName.toLowerCase() %>/',
            proyect: {
                name: 'Melisa Panel',
                version: '1.0.0',
                company: 'Melisa Company'
            }
        },
        less: {
            options: {
                compress: true
            },
            all: {
                files: {
                    '<%= pkg.output %>css/app.css': '<%= pkg.src %>less/app.less',
                    '<%= pkg.output %>css/app-phone.css': '<%= pkg.src %>less/app-phone.less'
                }
            }
        },
        watch: {
            files: ['<%= pkg.src %>less/**/*.less'],
            tasks: ['less']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'watch'
    ]);
    
};
