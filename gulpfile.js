'use strict';

var gulp = require('gulp');
var guldencoreTasks = require('guldencore-build');

guldencoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
