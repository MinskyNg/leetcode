function DoubleListNode(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.map = {};
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    var node = this.map[key];

    if (node !== undefined) {
        var prev = node.prev;
        if (prev !== null) {
            if (this.tail === node) {
                this.tail = prev;
            } else {
                node.next.prev = node.prev;
            }
            prev.next = node.next;
            node.next = this.head;
            node.prev = null;
            this.head.prev = node;
            this.head = node;
        }
        return node.value;
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    var tmp;

    if (this.map[key] !== undefined) {
        var node = this.map[key];
        node.value = value;
        tmp = node.prev;
        if (tmp !== null) {
            if (this.tail === node) {
                this.tail = tmp;
            } else {
                node.next.prev = node.prev;
            }
            tmp.next = node.next;
            node.next = this.head;
            node.prev = null;
            this.head.prev = node;
            this.head = node;
        }
    } else {
        if (this.size === 0) {
            this.head = new DoubleListNode(key, value);
            this.tail = this.head;
            this.size = 1;
        } else if (this.size === this.capacity) {
            tmp = this.tail.prev;
            delete this.map[this.tail.key];
            this.tail = tmp;
            if (this.tail) {
                this.tail.next = null;
            }
            tmp = this.head;
            this.head = new DoubleListNode(key, value);
            this.head.next = tmp;
            tmp.prev = this.head;
        } else {
            tmp = this.head;
            this.head = new DoubleListNode(key, value);
            this.head.next = tmp;
            tmp.prev = this.head;
            this.size++;
        }
        this.map[key] = this.head;
    }
};
