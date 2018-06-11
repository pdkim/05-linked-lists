'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class List {

  constructor() {
    this.head = null;
    this.foot = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.foot = node;
    }
    else {
      this.foot.next = node;
      node.previous = this.foot;
      this.foot = node;

    }
    this.length++;
  }
  //Big O === O(1)


  prepend(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.foot = node;
    }
    else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
    this.length++;
  }
  //Big O === O(1)


  reverse() {
    if (this.head.next === null) {
      return this;
    } else {
      let current = this.head;
      let prev = null;
      while (current.next) {
        let holdNext = current.next;
        current.next = prev;
        prev = current;
        current = holdNext;
      }
      this.head = current;
      this.head.next = prev;
    }
  }
  //Big O === O(n)


  remove() {
    var node = this.foot;
    this.foot = this.foot.previous;
    this.foot.next = null;
    this._length--;
    return node;
  }
  //Big O === O(1)


  serialize() {
    let message = '';
    let currNode = this.head;
    while (currNode.next) {
      message += `${currNode.value} -> `;
      currNode = currNode.next;
    }
    message += `${this.foot.value} -> X`;
    return message;
  }
  //Big O === O(n)


  deserilize(str) {
    let values = [];
    values = str.split(' ');
    console.log(values);
    console.log(values.length);
    for (let i = 0; i < values.length; i++) {
      this.append(values[i]);
    }
    return this;
  }
}
//Big O === O(n)

module.exports = List;