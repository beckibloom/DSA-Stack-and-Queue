class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        //if the stack is empty, then the node will be the top of the stack
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        //if the stack already has something, then create a new node, add data, and have the pointer point to the top
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        //In order to remove the top of the stack, you have to point the pointer to the next item and that next item becomes the top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}