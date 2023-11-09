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
    expect(headValue.headValue).toBe(5); 
})