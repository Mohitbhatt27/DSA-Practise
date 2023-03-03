function middleOfAList(head){
    let hare = head;
    let tortoise = head;
    while (hare!=null && hare.next!=null){  //returns 2nd middle in case of even
        hare = hare.next.next;
        tortoise = tortoise.next;
    }
    return tortoise;
};