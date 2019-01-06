/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator() {
  let linkedList = null;
  let tail = null;

  const getHead = () => {
    return linkedList;
  }

  const getTail = () => {
    return tail;
  }

  const add = (newValue) => {
    // define the node
    let newNode = {
      value: newValue,
      next: null,
    }
    if (!linkedList && !tail) {
      // attaching newNode to the head and tail if the linked list is empty.
      linkedList = newNode;
      tail = newNode;
    } else {
      // attaching newNode to the tail and setting newNode as the new tail.
      tail.next = newNode;
      tail = newNode;
    }
    return newNode;
  }

  const get = (number) => {
    let currentNode = linkedList; // define the starting point
    for (let i = 0; i < number; i++) {
      // get(number) should return false if number > number of items in linkedList.
      // check to see if currentNode is the last node. (if currentNode.next doesn't exist)
      if (!currentNode.next) {
        return false;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  const remove = (number) => {
    // now we can use get(number):
    // think of number as an index in an array:
    // we can get the previous and next nodes in a way similar to [i + 1] and [i - 1]
    let previousNode = get(number - 1);
    let nextNode = get(number + 1);
    // check if number > length of the linked list.
    if (!get(number)) {
      return false;
    }

    if (!nextNode) {
      previousNode.next = null;
      tail = previousNode;
    }
    // to remove the head, set the head to the next node.
    if (number === 0) {
      linkedList = nextNode;
    }
    // to remove middle nodes, point previousNode.next to nextNode.
    // since we already have a condition to check if number is bigger than the length of the list, we can just say number !== 0
    // in other words, numbers that have passed that condition are guaranteed to exist somewhere in the list.
    // so we can just check to see if the number is not the head.
    if (number !== 0) {
      previousNode.next = nextNode;
    }
  }

  function insert(value, number) {
    let previousNode = get(number - 1);
    let currentNode = get(number);
    let newNode = {
      value: value,
      next: null
    }

    if (number < 0 || !currentNode) {
      return false;
    }

    if (number === 0) {
      newNode.next = linkedList;
      linkedList = newNode;
    }

    if (number > 0) {
      newNode.next = currentNode;
      previousNode.next = newNode;
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert,
  }
}