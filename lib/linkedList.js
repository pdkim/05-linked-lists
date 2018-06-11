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


  reverse(node, parent) {
    let result = parent || {};

    if (node) {
      let child = node.next;
      node.next = parent;

      result = reverse(child, node);
    }

    return result;
  }


  remove() {
    var node = this.foot;
    this.foot = this.foot.previous;
    this.foot.next = null;
    this._length--;
    return node;
  }


  serialize(list) {
    let message = '';
    for(let i = 0; i < this.length; i++) {
      message += `${list[i].value} -> `;
    }
    return message;
  }

  deserilize(str) {
    let list = new List;
    let currNode = null;
    let values = str.split(' ');
    for(let i = 0; i < values.length; i++) {
      let node = new Node;
      node.value = values[i];
      currNode = node;

      if(list.head === null) {
        list.head = node;
        list.foot = node;
        currNode = node;
      }
      else {
        list[i-1].next = currNode;
        list.foot = currNode;
      }
      return list;
    }

  }
}

module.exports = List;