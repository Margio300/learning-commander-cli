#!/usr/bin/env node
'use script'

const colors   = require('colors');
const debug   = require('debug')('commander:cli')
const program = require('commander');
const prompt  = require('prompt');
const table = require('markdown-table') 

program
  .version('0.1.0', '-v, --version')
  .usage(' ');
  //.usage('encrypt|decrypt <password> <options>');
  
   

   program
  .command('roster')
   .description('List the lakers starting 5') 

//   .option('-k, --key <string>', 'String|phrase Key to Use')
  .action(function (roster, options) {
    console.log("")
    console.log(colors.yellow(' Welcome to the Los Angelos Lakers Roster'));
    console.log("") 
console.log(
  table([
    ['Name', 'Position','Jersey #'],
    ['L.James', 'Small Forward','23'],
    ['A.Davis', 'Power Forward','3'],
    ['D.Schroder','Point Guard', '17'],
    ['K.Caldwell-Pope','Shooting Guard', '1'],
    ['M.Gasol','Center', '14',]
  ])

)
console.log("") 
   });



   program
   .command('season')
    .description('Tells points,assist and rebounding for career') 
 
 //   .option('-k, --key <string>', 'String|phrase Key to Use')
   .action(function (roster, options) {
     console.log("")
     console.log(colors.yellow(' The Defending Champions stats for the 2020-2021 Season'));
     console.log("") 
 console.log(
   table([
     ['Name', 'PPG','Assist', "Rebounding"],
     ['L.James', '28.6','9.0','8.0'],
     ['A.Davis', '29.9','5.2','9.0'],
     ['D.Schroder','13.4', '6.1','2.0'],
     ['K.Caldwekk-Pope','8.3', '1.2','1.2'],
     ['M.Gasol','4.5', '3.0','6.0']
   ])
 
 )
 console.log("") 
 
    });
program.on('--help', function(){
    console.log();
    console.log('Extra Help Text');
    console.log('');
    console.log('');
    console.log('');
  });

// program.on('--help', function(){
//     console.log();
//     console.log('Examples:');
//     console.log('');
//     console.log('  $ pass encrypt mypassword -k oneWordPass');
//     console.log("  $ pass encrypt 'mypassword' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('  $ pass decrypt encryptedstring -k oneWordPass');
//     console.log("  $ pass decrypt 'encryptedstring' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('Notice: ')
//     console.log('  For special characters in passwords/keys,');
//     console.log('  please use single quotes around each');
//     console.log('');
//     console.log('');
//   });

  program.parse(process.argv);

  if (!program.args.length) program.help();



  