// TODO: insert, search, startsWith

const Trie = require('./Trie');

describe('Trie', () => {
  it('creation', () => {
    expect(new Trie());
  });

  describe('search', () => {
    it('searches word in the tree', () => {
      const tree = new Trie();

      tree.insert('helloWorld');

      expect(tree.search('helloWorld')).toBeTruthy();

      expect(tree.search('hell')).toBeFalsy();
      expect(tree.search('hex')).toBeFalsy();
    });
  });

  describe('startsWith', () => {
    it('searches prefix in the tree', () => {
      const tree = new Trie();

      tree.insert('helloWorld');

      expect(tree.startsWith('hell')).toBeTruthy();
    });
  });

  test('insert "app" -> insert "apps" -> search "app" success', () => {
    const tree = new Trie();

    tree.insert('app');
    tree.insert('apps');

    expect(tree.search('app')).toBeTruthy();
  });
});
