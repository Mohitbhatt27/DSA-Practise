function createNode(value) {
  return {
    data: value,
    next: null,
  };
}

function display() {
  let result = "";
  let temp = head;
  while (temp != null) {
    result += temp.data + "->";
    temp = temp.next;
  }
  result += "X";
  console.log(result);
}

function addAtHead(head, data) {
  let newNode = createNode(data);
  newNode.next = head;
  head = newNode;
  return head;
}

function addAtTail(head, data) {
  if (head == null) {
    return addAtHead(head, data);
  }
  let newNode = createNode(data);
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = newNode;
  return head;
}

function deleteHead(head) {
  if (head == null) return null;

  let temp = head.next;
  head.next = null; //detach original head from linked list
  head = temp;
  return head;
}

function deleteTail(head) {
  if (head == null) return null;
  if (head.next == null) return null;
  let temp = head;
  while (temp.next.next != null) {
    temp = temp.next;
  }
  // now we have access to the second last node
  //now break the connection between second last and last node
  temp.next = null;
  return head;
}

function addAt(head, data, idx) {
  if (idx == 0) {
    return addAtHead(head, data);
  }

  let temp = head;
  for (let i = 0; i < idx - 1 && temp != null; i++) { //go till index i-1
    temp = temp.next;
  }
  if (temp == null) {
    console.log("Cannot add a node at this index");
    return;
  }
  let newNode = createNode(data);
  newNode.next = temp.next;
  temp.next = newNode;
}

function length(head){
    let temp = head;
    let l = 0;
    while(temp!=null){
        l++;
        temp = temp.next;
    }
    console.log("length is", l);
    return;
}



let head = null;
head = addAtHead(head, 10);
head = addAtHead(head, 20);
head = addAtHead(head, 30);
head = addAtTail(head, 60);
head = deleteHead(head);
display();
length(head);
console.log(searchInALinkedList(head,1,0));

