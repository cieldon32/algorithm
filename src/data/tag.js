const character = /[a-zA-Z]/;
const words = /[^<>\/a-zA-Z]/;
const startTag = /</;
const endTag = />/;
const closeTag = /\//;
const regxs = {character, words, startTag, endTag, closeTag};

/**
 * verify which type the character is
 * the types are:
 * character
 * words
 * startTag
 * endTag
 * closeTag
 */
function regxChar(char) {
  const regxList = Object.keys(regxs);
  let r;
  regxList.map((regxName) => {
    if(regxs[regxName].test(char)){
      r = regxName;
    }
  });
  return r;
}

/**
 * verify which state the character is
 * all the states ate:
 * tagOpen
 * tagName
 * data
 * tagClose
 */
function checkState(char) {
  const r = regxChar(char);
  switch(r) {
    case 'character':
      if(currentState === 'tagOPen'){
        createStartTagToken(char);
        return 'tagName'
      } else if(currentState === 'tagName'){
        createStartTagToken(char);
        return 'tagName'
      } else {
        emitCharacterToken(char);
        return 'data'
      }
    case 'word':
      emitCharacterToken(char);
      return 'data'
    case 'startTag':
      consumeStartTag(char);
      return 'tagOpen'
    case 'endTag':
      emitTagToken(char)
      return 'data'
    case 'closeTag':
      if(currentState === 'tagOpen'){
        createEndTagToken(char)
        return 'tagClose'
      } else {
        emitCharacterToken(char)
        return 'data'
      }
  }
}

// get the words list
function getList(str) {
  for(let i = 0; i < str.length; i++){
    const r = checkState(str[i]);
    currentState = r;
  }
  return list
}

// consume <, from 'data' to 'tagOpen'
function consumeStartTag(letter) {
  currentTagName = '';
}

// consume [a-z], from: 'tagOpen' to 'tagName'
function createStartTagToken(letter) {
  currentTagName += letter;
}

// consume >, from: 'tagName', to 'data'
function emitTagToken(letter) {
  currentData = '';
  currentItem.type = currentTagName;
}

// consume [a-z], from 'data' to 'data'
function emitCharacterToken(letter) {
  currentData += letter;
}

// consume /, from 'tagOpen' to 'tagClose'
function createEndTagToken(letter) {
  currentItem.value = currentData;
  list.push(currentItem);
  currentItem = {};
}