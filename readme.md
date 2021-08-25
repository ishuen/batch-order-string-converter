Readme
======

This is a helper program to handle the batch order parameter [POST /fapi/v1/batchOrders](https://binance-docs.github.io/apidocs/futures/en/#place-multiple-orders-trade). 

### Set up

```
npm install
```

### Usage

#### Encode a JSON string

```
node index.js --encode='[{"symbol":"BTCUSDT","side":"BUY","type":"MARKET","quantity":0.01}]'

// OR

node index.js --encode '[{"symbol":"BTCUSDT","side":"BUY","type":"MARKET","quantity":0.01}]'

/*
output:
Encoded string: %5B%7B%22symbol%22%3A%22BTCUSDT%22%2C%22side%22%3A%22BUY%22%2C%22type%22%3A%22MARKET%22%2C%22quantity%22%3A0.01%7D%5D
*/
```
The `=` between the argument and the value is not mandatory. The quote marks at the beginning and the end of string is mandatory for the encoding due to the special characters in the json string.

#### Encode from a set of parameters

```
node index.js --symbol=BTCUSDT --side=BUY --type=MARKET --quantity=0.01

/*
output:
Encoded string:  %5B%7B%22symbol%22%3A%22BTCUSDT%22%2C%22side%22%3A%22BUY%22%2C%22type%22%3A%22MARKET%22%2C%22quantity%22%3A0.01%7D%5D
*/
```

This approach is only applicable when there is 1 element set in the array.

#### Decode

```
node index.js --decode=' %5B%7B%22symbol%22%3A%22BTCUSDT%22%2C%22side%22%3A%22BUY%22%2C%22type%22%3A%22MARKET%22%2C%22quantity%22%3A0.01%7D%5'

// OR

node index.js --decode  %5B%7B%22symbol%22%3A%22BTCUSDT%22%2C%22side%22%3A%22BUY%22%2C%22type%22%3A%22MARKET%22%2C%22quantity%22%3A0.01%7D%5


/*
output:
Decoded string:  [{"symbol":"BTCUSDT","side":"BUY","type":"MARKET","quantity":0.01}]
Object array:  [ { symbol: 'BTCUSDT', side: 'BUY', type: 'MARKET', quantity: 0.01 } ]
*/

```

The `=` between the argument and the value is not mandatory. The quote marks at the beginning and the end of string is not mandatory for the decoding.