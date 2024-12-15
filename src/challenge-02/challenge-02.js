"use strict";
/*

Challenge 2: Detecting unwanted access
I think ΩMEGA is trying to get into the system. For now, he's a baby and is following very simple patterns that we can detect but you are trying to create administrator passwords to access the terminal.

How can we detect these access attempts? You are following these patterns:

· Only use lowercase letters and digits.
· Never use digits after a letter (Once letters appear, the password must continue only with letters)
· If you use digits, if you use los you use the person equally (yes you jump a 3, ya in the will use a smaller number)
· If you use letters, always use them in equal or increasing alphabetical order (if a "b" comes out you will no longer be able to use an "a", for example)
Some examples for you to understand perfectly:

1234     -> true
abc      -> true
aabbcc - > true (repeats but always ascending)
112233 - > true (repeats but always ascending)
a123 -> false (a dumb number of una letter)
123abc   -> true
dbce - > false (one "d" and then one "b")
Access this log.txt with a list of attempts and with a program count how many have been invalid and how many valid. Send the answer using the command submit.

For example, if there are 10 valid and 5 invalid attempts send the command submit 10true5false

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrueAndFalseOmegaPasswords = getTrueAndFalseOmegaPasswords;
function charIsANumber(charOrCharCode) {
    if (typeof charOrCharCode === 'string') {
        // Ensure it's a single character
        if (charOrCharCode.length !== 1)
            return false;
        // Get char code from string
        const charCode = charOrCharCode.charCodeAt(0);
        return charCode >= 48 && charCode <= 57;
    }
    if (typeof charOrCharCode === 'number') {
        // Directly compare numeric char code
        return charOrCharCode >= 48 && charOrCharCode <= 57;
    }
    // Unsupported type
    return false;
}
function isGeneratedByOmega(str) {
    const regEx = /^[a-z0-9]+$/;
    let letterFound = false;
    let miniumLetterCharCode = 97; // 'a'
    let miniumNumberCharCode = 48; // '0'
    if (!regEx.test(str)) {
        return false;
    }
    for (let c of str) {
        const charCode = c.charCodeAt(0);
        if (charIsANumber(charCode)) {
            if (letterFound || charCode < miniumNumberCharCode) {
                // Is like finding an '1' after '2' or any number after a letter
                return false;
            }
            miniumNumberCharCode = charCode;
        }
        else {
            // If is a string
            letterFound = true;
            if (charCode < miniumLetterCharCode) {
                // Is like finding an 'a' after 'b'
                return false;
            }
            miniumLetterCharCode = charCode;
        }
        // console.log(c)
        // console.log(charCode)
    }
    return true;
}
function getTrueAndFalseOmegaPasswords(passwords) {
    //
    const generatedByOmega = passwords.filter((x) => isGeneratedByOmega(x));
    const notGeneratedByOmegaLength = passwords.length - generatedByOmega.length;
    return `${generatedByOmega.length}true${notGeneratedByOmegaLength}false`;
}
/*

SOLUTION: 299true198false

*/
