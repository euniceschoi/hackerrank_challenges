function print(head) {
    if(head != null){
        console.log(head.data);
        while(head.next != null){
            head = head.next;
            console.log(head.data);
        }
    }
}