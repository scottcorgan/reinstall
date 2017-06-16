#!/usr/bin/env node

var spawn = require('cross-spawn');
var rimraf = require('rimraf');

console.log('\nRemoving node_modules directory ...');

rimraf('node_modules', {}, function () {
    console.log('Cleaning NPM cache ..');
    
    spawn('npm', ['cache', 'clean', '--force'], { stdio: ['pipe', 'pipe', process.stderr] })
      .on('close', function () {
        
        console.log('Installing dependencies ...');
        
        spawn('npm', ['install'], { stdio: ['pipe', 'pipe', process.stderr] })
          .on('close', function (err) {
            
            var msg = 'Done!';
            
            if (err) {
              msg = 'Done, but with errors.';
            }
            
            console.log('\n' + msg + '\n');
          });
      });
  });
