class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.list = null;
    this.pointer = null;
  }

  append(value) {
    if (this.list === null) {
      this.list = new Node(value);
      this.pointer = this.list;
    } else {
      this.pointer.nextNode = new Node(value);
      this.pointer = this.pointer.nextNode;
    }
  }

  prepend(value) {
    if (this.list === null) {
      this.list = new Node(value);
      return;
    }
    const copy = this.list;
    this.list = new Node(value);
    this.list.nextNode = copy;
  }
  size() {
    if (this.list === null) return 0;
    let current = this.list;
    let counter = 1;
    while (current.nextNode !== null) {
      counter++;
      current = current.nextNode;
    }
    return counter;
  }
  head() {
    return this.list;
  }
  tail() {
    let current = this.list;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  // index starts from 0 and not 1
  at(index) {
    let current = this.list;
    for (let i = 0; i <= index; i++) {
      if (i === index) return current;
      if (current.nextNode) current = current.nextNode;
      else return null;
    }
  }

  pop() {
    let current = this.list;
    let previous = null;
    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }
    this.pointer = previous;
    return (previous.nextNode = null);
  }
  contains(value) {
    let current = this.list;
    while (current.value !== value) {
      if (current.nextNode) current = current.nextNode;
      else return false;
    }
    return true;
  }

  // index starts from 0 and not 1
  find(value) {
    let current = this.list;
    let index = 0;
    while (current.value !== value) {
      if (current.nextNode) {
        current = current.nextNode;
        index++;
      } else {
        return null;
      }
    }
    return index;
  }
  toString() {
    let current = this.list;
    let string = "";
    for (let i = 0; i < this.size(); i++) {
      string += string !== "" ? `=> ${current.value} ` : `${current.value} `;
      current = current.nextNode;
    }
    string += string !== "" ? `=> null ` : `null `;
    return string;
  }
}
