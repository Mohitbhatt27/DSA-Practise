var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null;
    }
    let first = headA;
    let second = headB;
    while(first!=second){
        if(first==null){
            first = headB;
        }
        else{
            first = first.next;
        }

        if(second==null){
            second = headA;
        }
        else{
            second = second.next;
        }
    }

    return first;
};