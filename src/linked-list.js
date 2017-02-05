const Node = require('./node');

class LinkedList {
    constructor() {
      this.head = null;
	this.tail = null;
	this.length = 0;
    }

    append(data) {
      var node = new Node(data);

      	if(this.length == 0) {
      		this.head = node;
      		this.tail = node;
      	}
      	else {
      		this.tail.next = node;
      		node.prev = this.tail;
      		this.tail = node;
      	}
      	this.length++;
      	return this;
      }
    head() {
      return this.head;
    }

    tail() {
      return this.tail;
    }

    at(index) {
      if(index < 0 || index > this.length || isNaN(index)) {
		throw new Error("Error! Index is invalid!");
	}
	else {
		var node = this.head;
		while (index--) {
			node = node.next;
		}

		return node;
	}
    }

    insertAt(index, data) {
      if(index < 0 || index > this.length || isNaN(index)) {
		throw new Error("Error! Index is invalid!");
	}
	else {
		if(index === this.length) {
			this.append(data);
		}
		else {
			var current = this.at(index);
			var node = new Node(data, current.prev, current);
			current.prev = node;
			node.prev.next = node;
			this.length++;


		}
	}

	return this;
    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {
      if(index < 0 || index > this.length || isNaN(index)) {
		throw new Error("Error! Index is invalid!");
	}
	else {
		var current = this.at(index);
		current.prev.next = current.prev;
		current.next.prev = current.next;
		length--;
	}

	return this;
    }

    reverse() {
      var current = this.head;

	while(current) {
		var temp = current.next;
		current.next = current.prev;
		current.prev = temp;
		current = current.prev;
	}

	var buf = this.head;
	this.head = this.tail;
	this.tail = buf;

	return this;
    }

    indexOf(data) {
      var node = this.head;
	var i = 0;

	while(i < this.length) {
		if(node.data === data)
			return i;
			i++;
			node = node.next;
	}

	return null;
}
    }

module.exports = LinkedList;
