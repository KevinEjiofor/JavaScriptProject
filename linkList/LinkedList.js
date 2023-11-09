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
          nextNode.nextElement = nextNode.nextElement.nextElement; // Remove duplicate
        } else {
          nextNode = nextNode.nextElement;
        }
      }

      current = current.nextElement;
    }
  }
module.exports = LinkedList;

