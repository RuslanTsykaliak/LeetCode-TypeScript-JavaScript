class MyCircularDeque {

    private deque: number[]
    private max: number

    constructor(k: number) {

        // initialize empty array deque and max as k
        this.deque = [];
        this.max = k;
    }

    insertFront(value: number): boolean {

        // if length of deque is less than max than insert value from starting and return true
        if (this.deque.length < this.max) {
            this.deque.unshift(value);
            return true;
        }

        // otherwise return false
        return false;
    }

    insertLast(value: number): boolean {

        // if length of deque is less than max than insert value from ending and return true
        if (this.deque.length < this.max) {
            this.deque.push(value);
            return true;
        }

        // otherwise return false
        return false;
    }

    deleteFront(): boolean {

        // if length of deque is greater than 0 then remove element from starting and return true
        if (this.deque.length) {
            this.deque.shift();
            return true;
        }

        // otherwise return false
        return false;
    }

    deleteLast(): boolean {

        // if length of deque is greater than 0 then remove element from ending and return true
        if (this.deque.length) {
            this.deque.pop();
            return true;
        }

        // otherwise return false
        return false;
    }

    getFront(): number {

        // if length of deque is greater than 0 then return first element of deque
        if (this.deque.length) {
            return this.deque.at(0);
        }

        // otherwise return -1
        return -1;
    }

    getRear(): number {

        // if length of deque is greater than 0 then return last element of deque
        if (this.deque.length) {
            return this.deque.at(-1);
        }

        // otherwise return -1
        return -1;
    }

    isEmpty(): boolean {

        // if length of deque is greater than 0 then return false
        if (this.deque.length) {
            return false;
        }

        // otherwise return true
        return true;
    }

    isFull(): boolean {

        // if length of deque is equal to max then return true
        if (this.deque.length === this.max) {
            return true;
        }

        // otherwise return true
        return false;
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */