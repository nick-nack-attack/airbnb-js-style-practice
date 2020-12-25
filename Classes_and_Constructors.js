/**
 * Classes and Constructors
 */

// ALWAYS USE CLASS
class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }
    pop() {
        const value = this.queue[0];
        this.queue.splice(0,1);
        return value;
    }
}

// USE EXTENDS FOR INHERITANCE
class PeekableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}

// RETURN this FOR METHOD CHAINING
class Jedi {
    jump() {
        this.jumping = true;
        return this;
    }
    setHeight(height) {
        this.height = height;
        return this
    }
}

const luke = new Jedi();

luke.jump()
    .setHeight()

// IT'S OKAY TO WRITE A CUSTOM toString()

// CLASSES HAVE DEFAULT CONSTRUCTOR
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
        this.name = 'Rey'
    }
    getName() {
        return this.name;
    }
    toString() {
        return `Jedi - ${this.getName()}`
    }
}

// AVOID DUPLICATE CLASS MEMBERS
class Foo {
    bar() { return 1; }
}

class Foo {
    bar() { return 2; }
}

// CLASS METHODS SHOULD USE this

class Doobar {
    bar() {
        console.log(this.bar);
    }
}

// USE static FOR STATIC METHODS
class Foobar {
    static bar() {
        console.log('bar')
    }
}