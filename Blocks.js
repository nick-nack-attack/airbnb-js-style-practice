/**
 * Blocks
 */

const whooop = true;

// USE { } ON MULTILINE
// else IS INLINE WITH CLOSING }

if (whooop) {
    console.log('There it is');
} else {
    console.log('...')
}

function bar() {
    return false;
}

// USE return ON THE FOLLOWING

// good
function foo() {
    if (x) {
        return x;
    }

    return y;
}

// good
function cats() {
    if (x) {
        return x;
    }

    if (y) {
        return y;
    }
}

// good
function dogs(x) {
    if (x) {
        if (z) {
            return y;
        }
    } else {
        return z;
    }
}



