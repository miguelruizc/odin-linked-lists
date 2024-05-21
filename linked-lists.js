class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.next = next;
	}
}

export class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	append(value) {
		let node = new Node(value, null);

		if (this.size === 0) this.tail = node;
		else {
			this.tail.next = node;
			this.tail = this.tail.next;
		}
		this.size++;

		// Connect head if list became size 1 or 2
		if (this.size === 1) {
			this.head = this.tail;
		}

		if (this.size === 2) {
			this.head.next = this.tail;
		}
	}

	prepend(value) {
		let temp = this.head;
		this.head = new Node(value, temp);
		this.size++;

		// Connect tail if list became size 1 or 2
		if (this.size === 1) {
			this.tail = this.head;
		}

		if (this.size === 2) {
			this.head.next = this.tail;
		}
	}

	at(index) {
		// iterate nodes from 0 to index
		let cursor = this.head;
		let counter = 0;

		while (counter < index) {
			cursor = cursor.next;
			counter++;
		}

		return cursor;
	}

	pop() {
        // if size 0, return
        if(this.size === 0) return;
        // if size 1, tail and head must become null
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
        // else, remove tail element by moving tail to previous and set previous.next = null
        this.tail = this.at(this.size-2);
        this.tail.next = null;
        this.size--;
    }

	contains(value) {
		let cursor = this.head;
		if (cursor === null) return false; //empty list

		// Iterate over the list checking, if found return TRUE
		for (let i = 0; i < this.size; i++) {
			if (cursor.value === value) return true;
			cursor = cursor.next;
		}

		// Not found
		return false;
	}

	find(value) {
		// Iterate the list, tracking index
		let index = 0;
		let cursor = this.head;

		for (let i = 0; i < this.size; i++) {
			// return index if found
			if (cursor.value === value) return index;

			index++;
			cursor = cursor.next;
		}

		// return null if not found
		return null;
	}

	toString(_string = '', _cursor = this.head) {
		// iterate over the list recursively, generating a string with nodes

		// base case: cursor === null
		if (_cursor === null) {
			_string += 'NULL';
			return _string;
		}

		// Add node to string -> ne
		_string += `(${_cursor.value})->`;

		// Recur with the next node
		return this.toString(_string, _cursor.next);
	}

	insertAt(value, index) {
		// Error: Index out of bounds
		if (index < 0 || index > this.size) {
			console.log(`insertAt(${value}, ${index}), error: Index out of bounds`);
			return;
		}

		// if index === head, prepend() & return
		if (index === 0) {
			this.prepend(value);
			return;
		}

		// if index === tail, append() & return
		if (index === this.size) {
            this.append(value);
            return;
        }

		// Insert
		let node = new Node(value, this.at(index));
		let prevNode = this.at(index - 1);
		prevNode.next = node;
	}

	removeAt(index) {
        //if index out of bounds, return
        if(index < 0 || index > this.size-1) return;
        //if index === head, remove and reconect
        if(index === 0) {
            // if size 1, reset head & tail
            if(this.size === 1){
                this.head = null;
                this.tail = null;
                this.size--;
                return;
            } 
            // if > 1
            else {
                this.head = this.head.next; 
                this.size--;
                return;
            }
        }
        //if index === tail, pop
        if(index === this.size - 1){
          this.pop();    
          return;    
        }
        //if index not tail or head, remove and conect prev to next
        let currentNode = this.at(index);
        let previousNode = this.at(index-1);
        previousNode.next = currentNode.next;
	}
}