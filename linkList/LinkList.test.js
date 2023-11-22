const LinkedList = require("../linkList/LinkedList")

test("should check if the list is empty",
()=>{
    let newList = new LinkedList();
    let isTrue = newList.isEmpty();

    expect(isTrue).toBe(true);

})

test('that element can be inserted at the head', () => {
    const list = new LinkedList();
    list.insertAtHead(5);
    const headValue = list.gethead();
    expect(headValue).toBe(5); 
})

test("that element contains a Element",()=>{
    const checklist = new LinkedList();
    
    checklist.insertAtHead(5);
    checklist.insertAtHead(4);
    checklist.insertAtHead(10);
    checklist.insertAtHead(16);
    

let isFound = checklist.getElementIfExists(10)
expect(isFound).toBe(true);

})

test("should return the union of two linked lists", () => {
    const listA = new LinkedList();
    listA.insertAtHead(22);
    listA.insertAtHead(18);
    listA.insertAtHead(56);

    const listB = new LinkedList();
    listB.insertAtHead(14);
    listB.insertAtHead(12);
    listB.insertAtHead(22);

   
    const a = listA.unions(listB)
    const expectedUnion = a.getSize();

    expect(expectedUnion).toBe(5);
});
