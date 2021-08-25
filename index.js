const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

if (argv.encode) {
	console.log("Encoded string: ", encodeURIComponent(argv.encode));
}

if (argv.decode) {
	const str = decodeURIComponent(argv.decode);
	console.log("Decoded string: ", str);
	console.log("Object array: ", JSON.parse(str));
}

if (!argv.encode && !argv.decode) {
	const { _, $0, ...rest} = argv;
	console.log("Encoded string: ", encodeURIComponent(JSON.stringify([rest])));
}