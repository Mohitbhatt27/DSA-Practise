function createNode(value) {
    return {
      data: value,
      next: null,
      prev: null
    };
  }
  
  function addAtHead(data, head) {
    let newNode = createNode(data);
    if (head == null) {
      newNode.next = newNode;
      newNode.prev = newNode;
      return newNode;
    }
    newNode.next = head;
    newNode.prev = head.prev;
    head.prev.next = newNode;
    head.prev = newNode;
  
    return head;
  }
  
  function addAtTail(data, head) {
    let newNode = createNode(data);
    if (head == null) {
      newNode.next = newNode;
      newNode.prev = newNode;
      return newNode;
    }
    newNode.next = head;
    newNode.prev = head.prev;
    head.prev.next = newNode;
    head.prev = newNode;
  
    return head;
  }
  
  function deleteAtHead(head) {
    if (head == null) {
      console.log("Cannot delete from an empty linked list");
      return head;
    }
    if (head.next == head) {
      // single node
      head.next = null;
      head.prev = null;
      return null;
    }
  
    let newHead = head.next;
    head.next = null;
    newHead.prev = head.prev;
    head.prev.next = newHead;
  
    return newHead;
  }
  
  function deleteAtTail(head) {
    if (head == null) {
      console.log("Cannot delete from an empty LL");
      return head;
    }
    if (head.next == head) {
      head.next = null;
      head.prev = null;
      return null;
    }
  
    let tail = head.prev;
    tail.prev.next = head;
    head.prev = tail.prev;
  
    return head;
  }
  
  function addAt(idx, data, head) {
    if (idx == 0) {
      return addAtHead(data, head);
    }
  
    let temp = head;
    for (let i = 0; i < idx - 1 && temp.next != head; i++) {
      temp = temp.next;
    }
  
    if (temp == head) {
      console.log("Cannot add the value at this index");
      return head;
    }
  
    let newNode = createNode(data);
    newNode.next = temp.next;
    newNode.prev = temp;
    temp.next.prev = newNode;
    temp.next = newNode;
  
    return head;
  }
  
  function deleteAt(idx, head) {
    if (head == null) {
      console.log("Cannot delete from an empty LL");
      return head;
    }
    if (head.next == head) {
      head.next = null;
      head.prev = null;
      return null;
    }
  
    let temp = head;
    for (let i = 0; i < idx && temp.next != head; i++) {
      temp = temp.next;
    }
  
    if (temp == head) {
      console.log("Cannot delete the value at this index");
      return head;
    }
  
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
  
    return head;
  }
  