const person = {
    first: 'viggo',
    last: 'morntensen',
    
    // Fix: Use regular function for object methods
    fullName: function() {
        return `${this.first} ${this.last}`;
    },
    
    // Or use method shorthand (modern syntax)
    // fullName() {
    //     return `${this.first} ${this.last}`;
    // },

    shoutName: function() {
        // Arrow function here is GOOD - it preserves 'this' from shoutName
        setTimeout(() => {
            console.log(this.fullName());  // Works correctly!
        }, 2000);
    },
}

console.log(person.fullName());  // "viggo morntensen"
person.shoutName();             // "viggo morntensen" (after 2 seconds)