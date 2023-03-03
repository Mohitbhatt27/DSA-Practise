function createNode(value) {
    return {
      data: value,
      next: null,
      prev: null
    };
  }

function addAtHead(data,head) {
    let newNode = createNode(data);
    if(head == null) {
        head = newNode;
        return head;
    }
    newNode.next = head;
    head.prev = newNode;
    head = newNode;

    return head;
}

function addAtTail(data,head) {
    
    if(head == null) {
        return addAtHead(data);
    }
    let newNode = createNode(data);
    let temp = head;
    while(temp.next != null) {
        temp = temp.next;
    }
    // temp has tail node
    temp.next = newNode;
    newNode.prev = temp;

    return head;
}

function deleteAtHead(head) {

    if(head == null) {
        console.log("Cannot delete form an empty linked list");
        return head;
    }
    if(head.next == null) {
        // single node
        head = null;
        return head;
    }

    let newHead = head.next;
    head.next = null;
    newHead.prev = null;
    head = newHead;

    return head;
}


function deleteAtTail(head) {

    if(head == null) {
        return head;
    }
    if(head.next == null) {
        head = null;
        return head;
    }
    let temp = head;
    while(temp.next.next != null) {
        temp = temp.next;
    }
    //temp has tail-1 elem now
    let tail = temp.next;
    tail.prev = null;
    temp.next = null;

    return head;
}

function addAt(idx,data,head){
    if(idx==0){
        return addAtHead(data); 
    }

    let temp = head;
    for(let i = 0; i<idx-1 && temp!=null; i++){
        temp = temp.next;
    }

    if(temp == null) {
        console.log("Cannot add the value at this index");
        return head;
    }

    let newNode = createNode(data);
    newNode.next = temp.next;
    newNode.prev = temp;
    temp.next = newNode;
    newNode.next.prev = newNode;

    return head;
}

function deleteAt(idx,head){
    if(head == null) {
        console.log("Cannot delete form an empty LL");
        return head;
    }
    if(head.next == null) {
        head = null;
        return head;
    }

    let temp = head;
    while(temp.next.next != null) {
        temp = temp.next;
    }

    let tail = temp.next;
    tail.prev = null;
    temp.next = null;

    return head;
}


function display(head) {
    let str = "X<->";
    let temp = head;
    while (temp != null) {
      str += temp.data + "<->";
      temp = temp.next;
    }
    str += "X";
    console.log(str);
}

let head = null;
head = addAtHead(10,head);
head = addAtHead(20,head);
display(head);
head = addAtTail(40,head);
head = addAtTail(40,head);
display(head);
head = deleteAtHead(head);
display(head);
