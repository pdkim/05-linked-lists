'use strict';

const List = require('../lib/linkedList.js');

describe('Linked lists', () => {

  //append
  it('should insert a new node to the end of the list', (done) => {
    let newList = new List;
    newList.append(1);
    newList.append(2);
    let expected = 2;
    let actual = newList.head.next.value;
    expect(actual).toEqual(expected);
    done();
  });

  //prepend
  it('should add new node at the start of the list', (done) => {
    let newList = new List;
    newList.append(1);
    newList.prepend(2);
    let actual = newList.head.value;
    let expected = 2;
    expect(actual).toEqual(expected);
    done();
  });
  
  //reverse
  it('should return a linked list in reverse order of the previous one', (done) => {
    let newList = new List;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.reverse();
    console.log(newList);
    let actual = newList.head.value;
    let expected = 3;
    expect(actual).toEqual(expected);
    done();
  });

  //remove
  it('should remove the last node in the list', (done) => {
    let newList = new List;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.remove();
    let actual = newList.head.next.value;
    let expected = 2;
    expect(actual).toEqual(expected);
    done();
  });

  //serialize
  it('should convert the linked list object into a text', (done) => {
    let newList = new List;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    console.log(newList);
    let actual = newList.serialize();
    let expected = '1 -> 2 -> 3 -> X';
    expect(actual).toEqual(expected);
    done();
  });

  //deserialize
  it('should convert text into a new linked list', (done) => {
    let newList = new List;
    newList.deserilize('1 2 3');
    let actual = newList.head.value;
    let expected = '1';
    expect(actual).toEqual(expected);
    done();
  });
  
});