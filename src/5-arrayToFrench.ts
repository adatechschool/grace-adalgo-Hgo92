/**
 * This function takes an array of words and convert it into a french sentence. Words are separated by
 * commas and the two last words are separated by "et".
 *
 * @param {string[]} array array of words
 * @returns {string}
 *
 * @example
 *      arrayToFrench(['un', 'deux', 'trois', 'soleil']); // returns "un, deux, trois et soleil"
 *      arrayToFrench(['noir', 'blanc']); // returns "noir et blanc"
 */
export const arrayToFrench = (array : string[]) => {
    let phrase = ''
    if (array.length === 1) {
        return array[0]
    } else {
        for (let i=0; i<array.length; i++) {
            if (i===0) {
              phrase = array[i]
            } else if (i < array.length-1) {
                phrase = phrase + ', ' + array[i]
            } else {phrase = phrase + ' et ' + array[i]}
        }
        }
        return phrase
    };