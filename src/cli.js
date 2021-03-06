#!/usr/bin/env node
'use strict';

const program = require('commander');
const resolver = require('gisthrower-resolver');
const infrastructure = require('gisthrower-infrastructure');
const credentials = require('gisthrower-auth').credentials;

if (!String.prototype.format) {
  String.prototype.format = infrastructure.string.format;
}

const path = credentials.filePath;
infrastructure.json.checkFileOnFirstRun(path);

program
  .version('0.3.0');


const authenticationDataSplit = (val) => {
  const splittedData = val.split(':');
  return {
    username: splittedData[0],
    token: splittedData[1]
  };
};
program
  .option('-a --auth <username>:<token>', 'Persist github personal token locally', authenticationDataSplit);


const range = (val) => {
  const splittedData = val.split(':').map(Number);
  return {
    from: splittedData[0],
    to: splittedData[1]
  };
};

program
  .command('list')
  .alias('ls')
  .description('List operations on gists')
  .option('-a, --all', 'List all gists')
  .option('-s --starred', 'List only the starred gists from user')
  .option('-f --from-user <username>', 'List all gists from user')
  .option('-r --range <from>:<to>', 'List all gists into a given range, based on list displayed gist number', range)
  .action((options) => {
    if (options.starred) {
      resolver.list.starred();
    } else if (options.fromUser) {
      resolver.list.fromUser(options.fromUser);
    } else if (options.range) {
      resolver.list.range(options.range.from, options.range.to);
    } else {
      resolver.list.all();
    }
  });

program
  .command('gist <id>')
  .alias('gs')
  .description('Details about a single gist based on his <id>')
  .option('-m --more', 'Show gist informations/details')
  .option('-c --clone <dest>', 'Clone gist repository to a given destination')
  .option('-d --download-files <dest>', 'Download all gist files to a given destination')
  .option('-o --open [browser]', 'Open the gist in specified browser (default if browser isn\'t specified)')
  .action((id, options) => {
    resolver.gist.basic(id);
    if (options.more) {
      resolver.gist.moreDetails(id);
    } else if (options.clone) {
      resolver.gist.clone(id, options.clone);
    } else if (options.downloadFiles) {
      resolver.gist.downloadFiles(id, options.downloadFiles);
    } else if (options.open) {
      resolver.gist.open(id, options.open);
    }
  });

program.parse(process.argv);

if (program.auth) {
  credentials.setCredentials(program.auth.username, program.auth.token);
}
