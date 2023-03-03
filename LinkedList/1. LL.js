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

function addAt(head, data, i) {

  if (i == 0) {
    return addAtHead(head, data);
  }

  let temp = head; 
  for (let i = 0; i < i - 1; i++) { //going till index i-1
    temp = temp.next;
  }

  let newnode = createNode(data);
  newnode.next = temp.next;
  temp.next = newnode;

  return head;
}

function deleteAt(head, i){
  if(i==0) return deleteHead;
  let temp = head; 
  for (let i = 0; i < i - 1; i++) { //going till index i-1
    temp = temp.next;
  }
  let n = temp.next.next;
  temp.next = n;
  return head;

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

// if (temp == null) {
//   console.log("Cannot add a node at this index");
//   return;




let head = null;
head = addAtHead(head, 10);
head = addAtHead(head, 20);
head = addAtHead(head, 30);
head = addAtTail(head, 60);
head = deleteHead(head);
display();
length(head);
head = addAt(head,12,2);
display();
head = deleteAt(head,2);
display();


