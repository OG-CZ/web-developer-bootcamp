### Comparison Operator

```javascript
>    // greater than
<    // less than
>=   // greater than or equal to
<=   // less than or equal to
==   // equal to (type coercion)
!=   // not equal to (type coercion)
===  // strict equal (no type coercion)
!==  // strict not equal (no type coercion)
```

- In JavaScript, == checks value only
- In JavaScript, === it checks both type and value

In Java and Python, == checks for equality without type coercion (like JavaScript's ===). So, === in JavaScript works like == in Java or Python.

### console, alert & prompt

console.log(args\*, sep=',') -> print

### Truthy and Falsy Values
- all JS Values have an inherent truthyness or falsyness about them
Falsy values:
- false
- 0
- "" (empty string)
- null
- undefined
- NaN
**Everything else is truthy!!**