## Gisthrower
NodeJS CLI to easy create and manage gists

### CLI
```sh
$ gulp lint # lint the code using avaiable es6 features*
```

### CLI (The DEV one)
```sh
$ npm install -g # globally installs the gisthrower (to run commands)
$ npm link # create the symlink to gisthrower command (bind to development/code local repository)
```

### CLI (The Gisthrower one)
```sh
$ gisthrower # equivalent to --help
$ gisthrower <user> <token> # Save your git personal token
$ gisthrower --help # Help
$ gisthrower --list|-ls # list all gists from your user
$ gisthrower --starred|-s # List all starred gists from your user
$ gisthrower --from-user <targetuser> # List all from targetuser
```

# Roadmap
- [ ] Test coverage
- [ ] Apply on Travis.ci
- [ ] Show dependencies
- [ ] Get details from a single gist
- [ ] Point files to include on gist (fs IO)
- [ ] Create Gists
- [ ] Edit Gists
- [ ] Delete Gists
- [ ] Star Gists
- [ ] Unstar Gists

`notes`
- [Github api v3](https://developer.github.com/v3/gists/)
- Github authentication using [Personal Access Token](https://developer.github.com/v3/auth/)
- [Commander (User for CLI)](https://www.npmjs.com/package/commander)
