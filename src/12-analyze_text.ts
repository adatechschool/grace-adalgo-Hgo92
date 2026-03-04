export const analyze_text = (str : string) => {
    let countLetter = 0;
    let countWord = 0;
    let countSentences = 0;

            if (str.length > 0) {
            countWord++;
            countSentences++}

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") countWord++;
        if (str[i] === "." && str[i+1] === " ") countSentences++;
        if (str[i] === "?" && str[i+1] === " ") countSentences++;
        if (str[i] === "!" && str[i+1] === " ") countSentences++;
        if (str[i] && str[i] != " " && str[i] != "." && str[i] != "?" && str[i] != "!") countLetter++;
    }
    
    const object = { letters: countLetter, words : countWord, sentences:countSentences }

    return object }

    /* Write a function named analyze_text that takes a string as argument.

 It will return an object with the following properties:
 - letters: number of alphabetical characters (A–Z, a–z)
 - words: number of words
 - sentences: number of sentences

 A word is defined as a sequence of alphabetical characters.
 A sentence ends with one of the following characters:
 '.', '!' or '?'.

 ⚠️ You are NOT allowed to use:
 - split()
 - Regular expressions

 You must iterate through the string character by character.

 Examples

 This: analyze_text("Hello world.")
 Will return:
 { letters: 10, words: 2, sentences: 1 }

 This: analyze_text("Hello world. How are you?")
 Will return:
 { letters: 21, words: 5, sentences: 2 }

 This: analyze_text("")
 Will return:
 { letters: 0, words: 0, sentences: 0 }
*/