const Node = require("../linkList/Node")


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
        
    }
}
LinkedList.prototype.gethead = function() {
  if (this.head !== null) return this.head.value;
}


LinkedList.prototype.isEmpty = function(){
    return this.head === null;
}


LinkedList.prototype.insertAtHead = function(value){
    let newNode = new Node(value);
    newNode.nextElement = this.head; 
    this.head = newNode;

}

LinkedList.prototype.printElements = function(){
    let element = this.head;
    while (element !== null) {
        process.stdout.write(`${element.value} ->`);
        element = element.nextElement;
    }
    process.stdout.write('null\n');
}


LinkedList.prototype.deleteHead = function() {
    let element = this.head;
    this.head = element.nextElement;
  }

  LinkedList.prototype.getSize = function(){
    let count = 0;
    let element = this.head;
    while (element !== null) {
      count++;
      element = element.nextElement;
    }
    return count;
  };
  LinkedList.prototype.removeDuplicatesElement= function() {
    let current = this.head;

    while (current !== null) {
      let nextNode = current;
      while (nextNode.nextElement !== null) {
        if (current.value === nextNode.nextElement.value) {
          nextNode.nextElement = nextNode.nextElement.nextElement; 
        } else {
          nextNode = nextNode.nextElement;
        }
      }

      current = current.nextElement;
    }
  }
  LinkedList.prototype.getElementIfExists = function (elementNumber) {
    let isFound = false;
    let current = this.head;

    while (current !== null) {
        if (current.value === elementNumber) {
            isFound = true;
            break;
        }
        current = current.nextElement;
    }

    return isFound;
};


LinkedList.prototype.unions = function (otherList) {
  let current = this.head;


  while (current.nextElement !== null) {
      current = current.nextElement;
     
  }

   current.nextElement = otherList.head;
   this.removeDuplicatesElement()
   this.sort();

   return this;
};
LinkedList.prototype.intersections = function(){
  



}
LinkedList.prototype.getElementInPositionOfIndex = function(index) {
  let current = this.head;
  let length = this.getSize() - index;

  
  if (index < 0 || index >= this.getSize()) {
    return null; 
  }

  while (length > 0 && current !== null) {
    current = current.nextElement;
    length--;
   
  }


  return current.value; 
}
LinkedList.prototype.reverse = function() {
  let current = this.head;
  let reversedList = null;

  while (current !== null) {
    let newNode = new Node(current.value);
    newNode.nextElement = reversedList;
    reversedList = newNode;

    current = current.nextElement;
  }

  this.head = reversedList;
};
LinkedList.prototype.palindrome = function () {
  let current = this.head;
  let reversedList = null;


  while (current !== null) {
    let newNode = new Node(current.value);
    newNode.nextElement = reversedList;
    reversedList = newNode;

    current = current.nextElement;
  }


  current = this.head;
  while (current !== null) {
    if (current.value !== reversedList.value) {
      return false;
    }

    current = current.nextElement;
    reversedList = reversedList.nextElement;
  }

  return true;
};


LinkedList.prototype.sort = function () {
  let swapped;
  let current;
  let nextNode = null;

  if (this.head === null) {
      return;
  }

  do {
      swapped = false;
      current = this.head;

      while (current.nextElement !== nextNode) {
          if (current.value > current.nextElement.value) {
            
              let temp = current.value;
              current.value = current.nextElement.value;
              current.nextElement.value = temp;

              swapped = true;
          }

          current = current.nextElement;
      }
      nextNode = current;
  } while (swapped);
};



module.exports = LinkedList;

