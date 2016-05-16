[![Build Status](https://travis-ci.org/eduardoarnold/gisthrower.svg?branch=master)](https://travis-ci.org/eduardoarnold/gisthrower) [![codecov](https://codecov.io/gh/eduardoarnold/gisthrower/branch/master/graph/badge.svg)](https://codecov.io/gh/eduardoarnold/gisthrower) [![Dependency Status](https://david-dm.org/eduardoarnold/gisthrower.svg)](https://david-dm.org/eduardoarnold/gisthrower) [![Node Version](https://img.shields.io/badge/node-5.9.x-blue.svg)]()


# Gisthrower - A minimalist CLI to manage gists
> Manage your gists from command line using Personal access tokens from GitHub

---

## Install
```sh
$ npm install -g gisthrower
```

## Usage

```
Usage: gisthrower [command] <parameter> {OPTIONS} <parameters>

Standard Options:
    --version, -v                    Get versions of package
       --help, -h                    Get CLI help
       --auth, -a  <user>:<token>    Save personal access token and username

Commands:
             list                    List gists
             gist  <id>              Get details from a single gist based on his <id>
```

```
List command:

List
Usage:
                    list  {OPTIONS}

Options:
               --all, -a                           List all gists from current saved user/token
           --starred, -s                           List only starred gists
         --from-user, -f     <username>            List all public gists from specific user
              --rage, -r     <from>-<to>           List all gists in a given rage (index list based)

Gist
Usage:
                    gist     <id>                  Get details from a single gist

Options:
    --download-files, -d     <destination>         Download all files from a gist to a given destination folder
             --clone, -c     <destination>         Clone your gist repository to a given repository
```

### Development
```sh
$ npm link          # create the symlink to gisthrower command to your working folder
$ gulp test:mocha   # run mocha tests
$ gulp lint         # lint the code using avaiable es6 features*
$ npm test          # run codecoverage
```

# Roadmap
#### TODO
```
TODO:
-  Point files to include on gist (fs IO)
-  Create Gists
-  Edit Gists
-  Delete Gists
-  Create release notes
-  Star Gists
-  Unstar Gists
```
```
DONE:
-  Clone gist repository to a local folder
-  Get details from a single gist
-  Show dependencies
-  100% coverage
-  Apply on Travis.ci
```

`notes`
- [Github api v3](https://developer.github.com/v3/gists/)
- Github authentication using [Personal Access Token](https://developer.github.com/v3/auth/)
- [Commander (User for CLI)](https://www.npmjs.com/package/commander)
