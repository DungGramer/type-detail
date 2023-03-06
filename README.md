# Type
A function check real typeof value in JavaScript.  
![workflow status](https://github.com/DungGramer/type-detail/actions/workflows/publish-package.yml/badge.svg) 
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
 [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

  
[![https://nodei.co/npm/type-detail.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/type-detail.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/type-detail)
## Installation
```bash
npm i type-detail
# or
yarn add type-detail
```

## Usage
```js
import typeDetail from 'type-detail';
// or import { typeDetail } from 'type-detail';

typeDetail(1); // 'integer'
typeDetail(1.1); // 'float'
typeDetail([1, 2, 3]); // 'array'
typeDetail(class Cat {}); // 'class'
typeDetail(async function () {}); // 'promise'
typeDetail(function* () {}); // 'generator'

```

## Support
+ array
+ arrayBuffer
+ BigInt64Array
+ BigUint64Array
+ blob
+ boolean
+ dataView
+ date
+ error
+ float
+ float32Array
+ float64Array
+ function
+ generator
+ infinity
+ int16Array
+ int32Array
+ int8Array
+ integer
+ map
+ NaN
+ null
+ object
+ promise
+ regExp
+ set
+ string
+ symbol
+ uint16Array
+ uint32Array
+ uint8Array
+ uint8ClampedArray
+ undefined
+ weakMap
+ weakSet