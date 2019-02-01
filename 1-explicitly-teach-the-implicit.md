# [explicitly teach the implicit](https://janke-learning.github.io/fosdem-2019/#/explicitly-teach-the-implicit)

one of the most crucial skills that experienced developers have, but usually isn't taught explicitly, is the ability to trace through code in their head one operation at a time.  without this skill new programmers are left having to blindly fix bugs, write new code by pasting together other snippets hoping for the best, and settling for rough behavior-level understadings of new code they encounter.

all of this can be easily avoided if you explicitly teach how to look inside a dense block of code and see it for what it is, nothing but a well-defined series of understandable operations. 

at first glance the expanded code may feel like just a lot of extra work, but that's naturally part of "explicitly teaching the implicit".  All the little things we do naturally without thinking need to be explicitly laid out in steps for studying.  After a couple minutes (or days), you'll get used to working with it and you'll probably find yourself expanding all the time. Learning to work with expanded code will help enormously understanding new code, tracking down bugs, and inferring strategies from new code.



### Index
* [how to do](#how-to-do)
* if, else if, else
    * [original code](#if-original-code)
    * [expand control flow](#if-expand-control-flow)
    * [expand expressions](#if-expand-expressions)
    * [log execution](#if-log-execution)
* for loop
    * [original code](#for-original-code)
    * [expand structure](#for-expand-structure)
    * [expand expressions](#for-expand-expressions)
    * [log execution](#for-log-execution)

---

## how to do

below are two snippets of code, one made up of an if/elseif/else and one of a for loop.  each snippet has been refactored 3 different ways - each more explicit than the last

try playing around with each refactor in the console passing through different values.  which version is easier to understand and explain back to someone else?

[TOP](#explicitly-teach-the-implicit)

---
---

## if, else if, else


### if: original code

```js
{
  const a = ;
  const b = ;
  const c = ;
  const expected = ;
  let actual;

  if (a == b || a && c) {
    actual = a + b + c;
  } else if (!c > !b) {
    actual = c || b + '';
  } else {
    actual = null;
  };

  console.log(actual === expected, actual + ' !== ' + expected);
};
```

### if: expand control flow

```js
{
  const a = ;
  const b = ;
  const c = ;
  const expected = ;
  let actual;

  const condition_1 = a == b || a && c;
  const condition_2 = !c > !b;

  if (condition_1) {
    actual = a + b + c;
  } else if (!c > !b) {
    actual = c || b + '';
  } else {
    actual = null;
  };

  console.log(actual === expected, actual + ' !== ' + expected);
};
```

### if: expand expressions

```js
{
  const a = ;
  const b = ;
  const c = ;
  const expected = ;
  let actual;

  let condition_1; { // = a == b || a && c;
    const val_1 = a == b;
    const val_2 = a && c;
    const val_3 = val_1 || val_2;
  condition_1 = val_3; };

  let condition_2; { // = !c > !b;
    const val_1 = !c;
    const val_2 = !b;
    const val_3 = val_1 > val_2;
  condition_2 = val_3; };

  if (condition_1) {

    actual; { // = a + b + c;
      const val_1 = a + b;
      const val_2 = val_1 + c;
    actual = val_2; };

  } else if (!c > !b) {

    actual; { // = c || b + '';
      const val_1 = b + '';
      const val_2 = c || val_1;
    actual = val_2; };

  } else {
    actual = null;
  };

  console.log(actual === expected, actual + ' !== ' + expected);
};
```

### if: log execution

```js
{
  const a = ;
  const b = ;
  const c = ;
  const expected = ;                            const log = [{a,b,c}];
  let actual;

  let condition_1; { // = a == b || a && c;     
    const val_1 = a == b;
    const val_2 = a && c;
    const val_3 = val_1 || val_2;               log.push({condition_1: val_3, val_1, val_2, val_3});
  condition_1 = val_3; };                        

  let condition_2; { // = !c > !b;
    const val_1 = !c;
    const val_2 = !b;
    const val_3 = val_1 > val_2;                log.push({condition_2: val_3, val_1, val_2, val_3});
  condition_2 = val_3; };                        

  if (condition_1) {

    actual; { // = a + b + c;
      const val_1 = a + b;
      const val_2 = val_1 + c;                  log.push({actual: val_2, val_1, val_2});
    actual = val_2; };

  } else if (!c > !b) {

    actual; { // = c || b + '';
      const val_1 = b + '';
      const val_2 = c || val_1;
    actual = val_2; };                           log.push({actual: val_2, val_1, val_2});

  } else {
    actual = null;                              log.push({actual});
  };    

  console.log(actual === expected, actual + ' !== ' + expected);
  console.log(log);
};
```

your notes:

```
```


[TOP](#explicitly-teach-the-implicit)

---
---

## for loop

### for: original code

```js
{
  let a = ;
  const b = [null, ];
  const limit = ;
  const expected = ;
  let actual;

  for (const i = 0; i < limit; i+=2) {
    b.push(a + i * b[i-1]);
    a *= b[i];
  };

  console.log(actual === expected, actual + ' !== ' + expected);
};
```

### for: expand control flow

```js
{
  let a = ;
  const b = [null, ];
  const limit = ;
  const expected = ;
  let actual;

  {
    let i = 0; 
    while (i < limit) {
      b.push(a + i * b[i-1]);
      a *= b[i];
      i+=2;
    };
  };

  console.log(actual === expected, actual + ' !== ' + expected);
};
```

### for: expand expressions

```js
{
  let a = ;
  const b = [null, ];
  const limit = ;
  const expected = ;
  let actual;

  {
    let i = 0; 
    let condition = i < limit;
    while (condition) {

      let next_item; { // a + i * b[i-1]
        const val_1 = i - 1;
        const val_2 = b[val_1];
        const val_3 = i * val_2;
        const val_4 = a + val_3;
      next_item = val_4; };  
      b.push(next_item);

      const next_a { // = a * b[i];
        const val_1 = b[i];
        const val_2 = a * val_1;
      next_a = val_2; };
      a = next_a;

      const next_i = i + 2;
      i = next_i;
    };
  };

  console.log(actual === expected, actual + ' !== ' + expected);
};
```

### for: log execution

`{
  let a = ;
  const b = [null, ];
  const limit = ; 
  const expected = ;                          const log = [{a,b:b.slice(),limit}];
  let actual;

  {
    let i = 0; 
    let condition = i < limit;                log.push({condition});
    while (condition) {

      let next_item; { // a + i * b[i-1]
        const val_1 = i - 1;
        const val_2 = b[val_1];
        const val_3 = i * val_2;
        const val_4 = a + val_3;              log.push({next_item: val_4, val_1,val_2,val_3,val_4});
      next_item = val_4; };  
      b.push(next_item);                      log.push({b:b.slice()});

      const next_a { // = a * b[i];
        const val_1 = b[i];
        const val_2 = a * val_1;              log.push({a: val_2, val_1});
      next_a = val_2; };
      a = next_a;                             

      const next_i = i + 2;                   log.push({i: next_i});
      i = next_i;                             

      let condition = i < limit;              log.push({condition});
    };
  };
  
  console.log(actual === expected, actual + ' !== ' + expected);
  console.log(log);
};

```

your notes:

```
```


[TOP](#explicitly-teach-the-implicit)


___
___
### <a href="http://janke-learning.org" target="_blank">
<img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
