// enter a phrase in command line and it will output the language it is in

// can't use ESM import unless package.json has type module or the file is .mjs not .js or common js .cjs
// but then can't use require without the following code 
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { franc } from 'franc'
const langs = require('langs');
const colors = require('colors');

const phrase = process.argv[2];
// returns an ISO code for the language
const code = franc(phrase);

// und(undetermined) is returned when can't identify lang
if (code === 'und') {
    console.log('Sorry, cannot figure it out'.red);
} else {
    // code variable has ISO 3 codes as specified in franc docs. Returns an object with name under name
    const lang = langs.where("3", code);
    console.log(lang.name.green);
}
