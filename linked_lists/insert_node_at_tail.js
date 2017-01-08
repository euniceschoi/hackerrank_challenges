/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    if(head == null){
         head = new Node(data);
    } else {
        current = head;
        while(current.next != null){
         current = current.next
        }
        current.next = new Node(data)
    }
    return head
}