/* eslint-disable no-param-reassign */
const Node = require('./Node');

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, current = this.root, index = 0) {
    if (index > word.length - 1) {
      current.end();
      return;
    }

    const letter = word[index];

    if (current.children.has(letter)) {
      const nextNode = current.children.get(letter);
      this.insert(word, nextNode, index + 1);
      return;
    }

    const newNode = new Node();
    current.children.set(letter, newNode);
    this.insert(word, newNode, index + 1);
  }

  search(word, current = this.root, index = 0) {
    if (index > word.length - 1) {
      return current.isEndOfWord;
    }

    const letter = word[index];
    const nextNode = current.children.get(letter);

    return nextNode
      ? this.search(word, nextNode, index + 1)
      : false;
  }

  startsWith(word, current = this.root, index = 0) {
    if (index > word.length - 1) {
      return true;
    }

    const letter = word[index];
    const next = current.children.get(letter);

    return next
      ? this.startsWith(word, next, index + 1)
      : false;
  }
}

module.exports = Trie;
