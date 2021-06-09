package com.gringrape.trie;

public interface TrieInterface {
    // TODO 주어진 접두어로 시작하는 모든 단어를 반환하도록 설정.
    boolean search(String word);

    void insert(String word);

    boolean startsWith(String prefix);
}
