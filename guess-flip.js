// import { flipACoin } from "./modules/coin.mjs";
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const args = (require("./node_modules/minimist"))(process.argv.slice(2))
// args["call"]
// const call = args.call || process.env.CALL || 0
// if ((call == 0) || ((call != "tails") && (call != "heads"))) {
//     console.log("Error: no input.");
//     console.log("Usage: node guess-flip --call=[heads|tails}");
// } else {
//     console.log(flipACoin(call));
// }

import { flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist'
const arg = minimist(process.argv.slice(2))
if (arg.call = 'heads' || arg.call == 'tails') {
    console.log(flipACoin(arg.call))
} else {
    console.log("Error: no input.")
    console.log("Usage: node gues-flip --call=[heads|tails}")
}