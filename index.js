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
  .command('encrypt <password>')
   .description('Encrypt a plain text password')
//   .option('-k, --key <string>', 'String|phrase Key to Use')
  .action(function (password, options) {
    console.log('Extra Help Text');
 
   });

   program
  .command('lakers <roster>')
   .description('List the lakers starting 5') 

//   .option('-k, --key <string>', 'String|phrase Key to Use')
  .action(function (roster, options) {
    console.log("")
    console.log(colors.yellow('   Extra Help Text'));
    console.log("") 
console.log(
  table([
    ['Name', 'Position','Jersey #'],
    ['Lebron James', 'Small Forward','1'],
    ['Anthony Davis', 'Power Forward','2'] 
  ])

)
 
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



   program
  .command('lakers <password>')
   .description('List the lakers starting 5') 

//   .option('-k, --key <string>', 'String|phrase Key to Use')
  .action(function (password, options) {
    console.log("")
    console.log(colors.yellow('   Extra Help Text'));
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
