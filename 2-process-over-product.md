# [process over product](https://janke-learning.github.io/fosdem-2019/#/process-over-product)

the skills learned struggling to complete professional tasks or use professional tooling are almost always __not__ the skills needed to complete the tasks fluidly and ... professionally.   There are far too many implicit skills and far too much implicit knowledge that developers take for granted.  

The difference between a competent programmer and an impressive programmer isn't so much what they build as how effortlessly they can build it. The competent programmer may need to spend days of hard study to arrive at the same finished code that the impressive developer could write in a couple hours.  This is because the impressive developer has impressive _first instincts_.  They intuitively ask and answer the right questions at the right time, moving them efficiently along to a good solution.

Fortunately this can be learned!  By creating exercises that explicitly ask your students to complete a series of well-defined sub-tasks instead of simply providing open-ended challenges, you can help them to build reliable thought habits that will give them two whole legs up.

"Practice makes permanent. Perfect practice makes perfect."

### Index:
* [open-ended recursive challenge](#reverse-a-string)
* [1. test cases](#test-cases)
* [2. base-case](#base-case)
* [3. turn-around](#turn-around)
* [4. break-down](#break-down)
* [5. build-up](#build-up)
* [6. scaffold](#scaffold)
* [7. factor out](#factor-out)
* [8. collapse](#collapse)
* [9. formally define](#formally-define)
* [10. compose](#compose)
* [run_tests function](#helper-functions)


---

## reverse a string


build a [recursive function](https://github.com/janke-learning/recursion) that takes a string, adds returns a reversed string with a "." placed before each letter.

before moving on to completing each step, be sure to copy-paste the [testing function](#helper-function) into your console and hit enter



[TOP](#process-over-product)

---

## test cases

write a suite of test cases to convince yourself you understand what this function is asking, and to make sure your final function does what you think it does.

```js
test_cases = [
    {name:'roadwork', args:['roadwork'], expected:'.k.r.o.w.d.a.o.r'},
    {name:'p 9**7  _', args:['p 9**7  _'], expected:'._. . .7.*.*.9. .p'},
    {name:'\n \t\t', args:['\n \t\t'], expected:'.\t.\t. .\n'},
    {name:'tr, tr, fa', args:['tr, tr, fa'], expected:'.a.f. .,.r.t. .,.r.t'},
    {name:'', args:[''], expected:''},
    {name:'e', args:['e'], expected:'.e'},
 ];
```

[TOP](#process-over-product)

---


## base case

what is the smallest possible argument that is relevant to your challenge?  write a function to detect if it's argument is a base case.

```js
base_cases = [
    {name:'roadwork', args:['roadwork'], expected:false},
    {name:'ro', args:['ro'], expected:false},
    {name:'r', args:['r'], expected:true},
    {name:'', args:[''], expected:true},
 ];
function is_base(str) {
  return str.length === 1 || str.length === 0;
};
run_tests(is_base, base_tests);
```

[TOP](#process-over-product)

---


## turn around

what do you do to a base case argument before it can be built back up into a solution?

```js
// will only get arguments of length 0 and 1
turnt_cases = [
    {name:'o', args:['o'], expected:'.o'},
    {name:'r', args:['r'], expected:'.r'},
    {name:'', args:[''], expected:''},
 ];
function turn_around(str) {
  if (str.length === 1) {
    return '.'+str;
  } else {
    return '';
  };
};
run_tests(turn_around, turnt_cases);
```

[TOP](#process-over-product)

---


## break-down

how do you bring arguments one step closer to being a base case?

```js
broke_cases = [
    {name:'roadwork', args:['roadwork'], expected:['road','work']},
    {name:'ro', args:['ro'], expected:['r','o']},
    {name:'roadworks', args:['roadworks'], expected:['road','works']},
    {name:'roa', args:['roa'], expected:['r','oa']}
 ];
function break_down(str) {
  const middle = str.length/2;
  const left = str.slice(0, middle);

  const end = str.length;
  const right = str.slice(middle, end);
  
  return [left, right];
};
run_tests(break_down, broke_cases);
```

[TOP](#process-over-product)

---


## build up

how do you take two partial solutions and build them closer to a complete solution?

```js
build_cases = [
    {name:'".d.a.o.r", ".k.r.o.w"', args:[".d.a.o.r",".k.r.o.w"], expected:".k.r.o.w.d.a.o.r"},
    {name:'".r", ".o"', args:['.r','.o'], expected:'.o.r'},
    {name:'".d.a.o.r", ".s.k.r.o.w"', args:[".d.a.o.r",".s.k.r.o.w"], expected:".s.k.r.o.w.d.a.o.r"},
    {name:'".r", ".a.o"', args:['.r','.a.o'], expected:'.a.o.r'}
 ];
function build_up(left, right) {
  return right + left;
};
run_tests(build_up, build_cases);
```

[TOP](#process-over-product)

---

## scaffold

scaffold the chunks you wrote above into a standard recursive template. how does the recursive call? how many are they? how do the relate to the break-down and build-up?

(don't forget to load your test cases into the console!)

```js
function scaffold(str) {
  if (is_base(str)) {
    return turn_around(str);
  } else {
    const broke = break_down(str);
    const rec_left = scaffold(broke[0]);
    const rec_right = scaffold(broke[1]);
    const built = build_up(rec_left, rec_right);
    return built;
  };
};
run_tests(scaffold, test_cases);
```

[TOP](#process-over-product)

---


## factor out

factor out the body of each function to build your final recursive solution


```js
function reverse(str) {
  if (str.length === 1 || str.length === 0) {
    if (str.length === 1) {
      return '.'+str;
    } else {
      return '';
    };
  } else {
    const middle = str.length/2;
    const left = str.slice(0, middle);

    const end = str.length;
    const right = str.slice(middle, end);

    const rec_left = reverse(left);
    const rec_right = reverse(right);

    const built = rec_right + rec_left;

    return built;
  };
};
run_tests(reverse, test_cases);
```

[TOP](#process-over-product)

---

## collapse

collapse all the variable declarations into each other

```js
function collapse(str) {
  if (str.length === 1 || str.length === 0) {
    return (str.length === 1) ? '.'+str : '' ;
  } else {
    return collapse(str.slice(str.length/2, str.length)) + collapse(str.slice(0, str.length/2));
  };
};
run_tests(collapse, test_cases);
```

[TOP](#process-over-product)

---


## formally define

write a formal definition for your solution. feel free to use whatever notation or pseudo code works for you as long as you keep the structure of a [recursive definition](https://github.com/janke-learning/recursion#recursive-definitions)

```
for all strings
r(str) === (str.lenght === 1) ? '.'+str : ''      ::  if (length === 1 or 0)
r(str) === right(str) + left(str)                 ::  if (lenght > 1)
```

[TOP](#process-over-product)

---

## compose

rewrite the solution to be a single expression composed of the chunks you wrote earlier

```js
{
  const bc = is_base;
  const ta = turn_around;
  const bd = break_down;
  const recurse = (arr) => [ r(arr[0]), r(arr[1]) ];
  const bu = build_up;

  const r = (str) => (bc(str)) ? ta(str) : bu(...recurse(bd(str)));
  run_tests(r, test_cases);
};
```

[TOP](#process-over-product)

---




## Helper Functions

### Run Tests

takes a function and array of test cases.  
* if a case passes, nothing happens  
* if it fails, the actual & expected values are logged

this helper is used to build the test cases against the recursive function and to test the expanded solution.

```js
function run_tests(_target, _cases) {
  for (let t_case of _cases) {

    // process user input (test cases)
    const expected = t_case.expected;
    const args = JSON.parse(JSON.stringify(t_case.args));
    
    // perform core logic (run test and assert)
    let actual = _target(...args);
    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else if ( typeof expected === 'number' && isNaN(expected) ) {
      pass = isNaN(actual) && typeof actual === 'number';
    } else {
      pass = actual === expected;
    };

    // communicate result to developer
    if (!pass) {
      console.groupCollapsed(`%c ${t_case.name}: \n`, 'color:orange');
      console.log(`%c   actual: ${typeof actual},`, 'color:red', actual);
      console.log(`%c   expected: ${typeof expected},`, 'color:blue', expected);
      console.groupEnd();
    };
  };
};
```

[TOP](#process-over-product)


___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
