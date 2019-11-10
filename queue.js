class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    
    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item in the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to remove
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}