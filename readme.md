Readme
======

This is a helper program to handle the batch order parameter [POST /fapi/v1/batchOrders](https://binance-docs.github.io/apidocs/futures/en/#place-multiple-orders-trade). 

### Set up

```
npm install
```

### Usage

#### Encode

```
node index.js --encode='[{"symbol":"BTCUSDT", "side":"BUY", "type": "LIMIT", "quantity": 0.01}]'
```

OR

```
node index.js --encode '[{"symbol":"BTCUSDT", "side":"BUY", "type": "LIMIT", "quantity": 0.01}]'
```
The `=` between the argument and the value is not mandatory. The quote marks at the beginning and the end of string is mandatory for the encoding due to the special characters in the json string.


#### Decode

```
node index.js --decode='%5B%7B%22symbol%22%3A%22BTCUSDT%22%2C%20%22side%22%3A%22BUY%22%2C%20%22type%22%3A%20%22LIMIT%22%2C%20%22quantity%22%3A%200.01%7D%5D'
```

OR

```
node index.js --decode %5B%7B%22symbol%22%3A%22BTCUSDT%22%2C%20%22side%22%3A%22BUY%22%2C%20%22type%22%3A%20%22LIMIT%22%2C%20%22quantity%22%3A%200.01%7D%5D

```

The `=` between the argument and the value is not mandatory. The quote marks at the beginning and the end of string is not mandatory for the decoding.