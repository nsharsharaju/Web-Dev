
const findPossibleWords = (dictList,userWords) => {
    const possibleWords = []
    userWordsFreq = getFreqObject(userWords) // {a:1,c:1,?:3}
    dictList.forEach(item => {
        charFreq = getFreqObject(item) // {a:1,b:2,c:1}
        let specialCharacterCount = 0
        Object.keys(charFreq).forEach(char => {
            if(userWordsFreq[char]) {
                if(charFreq[char]<=userWordsFreq[char]) {
                } else{
                    specialCharacterCount = charFreq[char] - userWordsFreq[char] + specialCharacterCount
                }
            } else {
               specialCharacterCount = specialCharacterCount + charFreq[char]
            }
        }
        )
        if(specialCharacterCount == 0 || specialCharacterCount <= userWordsFreq['?']) possibleWords.push(item)
    })
    return possibleWords
}

const getFreqObject = (words) => {
    const result = {}
    const letterArray = words.split('');
    letterArray.forEach(char => {
        if(!result[char]) result[char] = 1
        else result[char]++
    })
    return result
}

dictList = ['abbc','abd','cab']
userWords = 'ac?'

console.log(findPossibleWords(dictList,userWords))