Workflow
========

`npm` installs js packages. You can think of it as a top-level package manager,
the initial source of packages. `npm` installs `bower` and `gulp`.

`bower` installs vendor dependencies, like bootstrap or jQuery. It defaults to
installing under `./bower_components`.

`gulp` is a task runner/build system, much like how the modern usage of a
Makefile. You can specify tasks by chaining together `src` to `dest`, filtering
them through `gulp` plugins. `gulp` can watch your filesystem for changes and
automatically run these tasks when triggered.
