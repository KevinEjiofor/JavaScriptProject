const Node = require("../linkList/Node");
const LinkedList = require("../linkList/LinkedList");

const listA = new LinkedList();
listA.insertAtHead(22);
listA.insertAtHead(18);
listA.insertAtHead(56);


const listB = new LinkedList();
listB.insertAtHead(14);
listB.insertAtHead(12);
listB.insertAtHead(22);
let expected = listA.unions(listB);
expected.printElements();





// let linkedList = new LinkedList();
// linkedList.insertAtHead(22);
// linkedList.insertAtHead(18);
// linkedList.insertAtHead(56);
// linkedList.insertAtHead(2);
// linkedList.insertAtHead(10);

// let isFound = linkedList.getElementIfExists(10);
// linkedList.printElements();

// linkedList.deleteHead();
// linkedList.printElements();

// s = linkedList.getSize();
// console.log(s);
// console.log(isFound);

const listVaule = new LinkedList();

listVaule.insertAtHead(20);
listVaule.insertAtHead(3);
listVaule.insertAtHead(34);
listVaule.insertAtHead(25);
listVaule.insertAtHead(42);



console.log(listVaule.getElementInPositionOfIndex(3));


const reverse = new LinkedList();


reverse.insertAtHead(20);
reverse.insertAtHead(3);
reverse.insertAtHead(34);
reverse.insertAtHead(25);
reverse.insertAtHead(42);

reverse.reverse()

reverse.printElements();


const palindrome = new LinkedList();


palindrome.insertAtHead(1);
palindrome.insertAtHead(2);
palindrome.insertAtHead(2);
palindrome.insertAtHead(1);

console.log(palindrome.palindrome());

palindrome.printElements();









