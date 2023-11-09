const Node = require("../linkList/Node");
const LinkedList = require("../linkList/LinkedList");

let linkedList = new LinkedList();
linkedList.insertAtHead(5);
linkedList.insertAtHead(4);
linkedList.insertAtHead(3);
linkedList.insertAtHead(2);

linkedList.printElements();

linkedList.deleteHead();
linkedList.printElements();

s = linkedList.getSize();
console.log(s);




