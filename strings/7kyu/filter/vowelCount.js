// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// --- USE THE .match() to retreive results of matching a string against an expression

// put the letters in your brackets - and the g = global tag -> find tags in mdn

// checks to see if matches or is empty

const getCount = (srt) => (srt.match(/[aeiou]/g) || []).length;
