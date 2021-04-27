:x: [@set-theory/cartesian-product](https://set-theory.github.io/cartesian-product)
==

Cartesian product for JavaScript.
See [docs](https://set-theory.github.io/cartesian-product/index.html).

> :building_construction: Caveat emptor! This is work in progress. Code may be
> working. Documentation may be present. Coherence may be. Maybe.

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import { product } from '@set-theory/cartesian-product' ;
product( [ "ABCD" , "xy" ] , 1 ) ; // Ax Ay Bx By Cx Cy Dx Dy

import { range } from '@aureooms/js-itertools' ;
product( [ range( 2 ) ] , 3 ) ; // 000 001 010 011 100 101 110 111

product( [ range( 4 ) , range( 4 ) ] ) ; // 00 01 02 03 10 11 12 13 20 21 ...

import { diagonal } from '@set-theory/cartesian-product' ;
diagonal( range( 4 ) , range( 4 ) ) ; // 00 01 10 02 11 20 03 12 21 30 ...

import { count } from '@aureooms/js-itertools' ;
product( [count( ), count( )] ) ; // Loops forever without yielding. DO NOT DO THIS
diagonal( count( ), count( ) ) ; // 00 01 10 02 11 20 03 12 21 30 ...
import { _product } from '@set-theory/cartesian-product' ;
_product( [count( ), count( )], 0, 2 ) ; // 00 01 02 03 04 05 06 07 08 09 ...
```

[![License](https://img.shields.io/github/license/set-theory/cartesian-product.svg)](https://raw.githubusercontent.com/set-theory/cartesian-product/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@set-theory/cartesian-product.svg)](https://www.npmjs.org/package/@set-theory/cartesian-product)
[![Tests](https://img.shields.io/github/workflow/status/set-theory/cartesian-product/ci:test?event=push&label=tests)](https://github.com/set-theory/cartesian-product/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/set-theory/cartesian-product.svg)](https://david-dm.org/set-theory/cartesian-product)
[![Dev dependencies](https://img.shields.io/david/dev/set-theory/cartesian-product.svg)](https://david-dm.org/set-theory/cartesian-product?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/set-theory/cartesian-product.svg)](https://github.com/set-theory/cartesian-product/issues)
[![Downloads](https://img.shields.io/npm/dm/@set-theory/cartesian-product.svg)](https://www.npmjs.org/package/@set-theory/cartesian-product)

[![Code issues](https://img.shields.io/codeclimate/issues/set-theory/cartesian-product.svg)](https://codeclimate.com/github/set-theory/cartesian-product/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/set-theory/cartesian-product.svg)](https://codeclimate.com/github/set-theory/cartesian-product/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/set-theory/cartesian-product/main.svg)](https://codecov.io/gh/set-theory/cartesian-product)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/set-theory/cartesian-product.svg)](https://codeclimate.com/github/set-theory/cartesian-product/trends/technical_debt)
[![Documentation](https://set-theory.github.io/cartesian-product/badge.svg)](https://set-theory.github.io/cartesian-product/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@set-theory/cartesian-product)](https://bundlephobia.com/result?p=@set-theory/cartesian-product)
