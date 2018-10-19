#### Summary

Here is an example project for [issue 297](https://github.com/depcheck/depcheck/issues/297)

So, here are my SDK package (`my-awesome-package`) and my application package
(`my-awesome-application`). They are considered to be different repos.

#### Usage

##### Setup
```
npm i
```
##### Start
```
cd my-awesome-application
npm run start
```

##### Check deps
```
npm run check:app
npm run check:package
npm run check:app:package
npm run check:app:package:cwd
```

###### PS
To run this configuration properly I used node [--preserve-symlinks](https://nodejs.org/api/cli.html#cli_preserve_symlinks)
flag