#!/usr/bin/env node


var spawn = require('cross-spawn');

console.log('\nRemoving node_modules directory ...');

spawn('rm', ['-rf', 'node_modules'])
  .on('close', function () {
  
    console.log('Cleaning NPM cache ..');
    
    spawn('npm', ['cache', 'clean'])
      .on('close', function () {
        
        console.log('Install dependencies ...');
        
        spawn('npm', ['install'])
          .on('close', function () {
            
            console.log('Done!');
          });
      });
  });