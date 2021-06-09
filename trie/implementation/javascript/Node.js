class Node {
  constructor() {
    this.isEndOfWord = false;
    this.children = new Map();
  }

  end() {
    this.isEndOfWord = true;
  }
}

module.exports = Node;
