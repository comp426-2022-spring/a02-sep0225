import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = (require("./node_modules/minimist"))(process.argv.slice(2))
args["number"]
const number = args.number || process.env.NUMBER || 1
let rval = coinFlips(number);
console.log(rval);
console.log(countFlips(rval));