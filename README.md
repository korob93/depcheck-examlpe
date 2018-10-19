####Summary

Here is an example project for [issue 297](https://github.com/depcheck/depcheck/issues/297)
So, here are my SDK package (`my-awesome-package`) and my aplication package
(`my-awesome-package`). They are considered to be developed inside
different repos.

When I try to check dependencies for my SDK package I get depcheck error.
When I try to do same whe my SDK package is installed to application's `node_modules` everything works ok.

######PS
To run this configuration properly I used node [--preserve-symlinks](https://nodejs.org/api/cli.html#cli_preserve_symlinks)
flag