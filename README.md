# random-names



#TBD: REPLACE BADGE URL
[![travis build](https://img.shields.io/travis/kentcdodds/starwars-names.svg?style=flat-square)](https://travis-ci.org/kentcdodds/starwars-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/kentcdodds/starwars-names.svg?style=flat-square)](https://codecov.io/github/kentcdodds/starwars-names)
[![version](https://img.shields.io/npm/v/starwars-names.svg?style=flat-square)](http://npm.im/starwars-names)
[![downloads](https://img.shields.io/npm/dm/starwars-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=starwars-names&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/starwars-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

This is a npm git test bed. Who wins the conflict if npm tags repo vs. git tagging repo? 

Get random names from Star Wars characters.


## Installation

This package is distributed via npm:

```
npm install random-names
```

## Usage

```javascript
var names = require('starwars-names');
var allNames = names.all;
var randomName = names.random();
```

```javascript
import uniqueRandomArray from 'unique-random-array';
import foobarNames from './random-names.json';
```

cjs definition of modules.export for node 
modify above to ES6 import/export using transpiler to produce above cjs formatted code automatically for node and browser runtimes. 


### Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

You may have come to this project from different varying sources. There are a
different series of branches for each workshop/course I've done. To get started with
the project, start with this:

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
3. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
4. In the directory you cloned the repository, run `git fetch --all`
