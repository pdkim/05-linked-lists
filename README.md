Travis: [![Build Status](https://travis-ci.com/pdkim/05-linked-lists.svg?branch=linked-list)](https://travis-ci.com/pdkim/05-linked-lists)
Github: https://github.com/pdkim/05-linked-lists 

Feature: 
This application is a Single Linked List data structure that can append, prepend, reverse, and remove a node from a linked list.  In addition, the user is able to serialize a linked list into text format and deserialize text back into a linked list.


Intructions:
1. Fork the repository and clone the forked repo on your device.
2. Setup a package JSON by entering 'npm init -y' in your terminal
3. 'npm install' the following:
  - eslint
  - jest
4. Ensure package.json includes the following in the scripts section:
    "lint": "eslint **/*.js",
    "test": "jest --verbose --coverage"
5. enter npm test to run the test.
6. Observe the tests pass with no linter errors.