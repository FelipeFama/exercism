//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  push(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  pop() {
    if(!this.tail) return null;

    const poppedValue = this.tail.value;
    
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    return poppedValue
  }

  shift() {
    if(!this.head) return null;

    const shiftedValue = this.head.value;

    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    return shiftedValue;
  }

  unshift(value) {
    const node = new Node(value)

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
  }

  delete(value) {
    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = currentNode.next;
          if (this.head) this.head.previous = null;
        } else if (currentNode === this.tail) {
          this.tail = currentNode.previous;
          if (this.tail) this.tail.next = null;
        } else {
          currentNode.previous.next = currentNode.next;
          currentNode.next.previous = currentNode.previous;
        }
        break;
      }
      currentNode = currentNode.next;
    }
  }

  count() {
    let count = 0;
    let currentNode = this.head;

    while(currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
}