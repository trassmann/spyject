# spyjunk

Simple utility to spy on objects and functions. To improve the desperate experience of `console.log` debugging.

## Install

`npm install spyjunk`

## Usage

### Object Spy

```javascript
import { makeObjectSpy } from "spyjunk";

const someFunc = (x, y) => x + y;

const target = {
  n: 123,
  s: "someString"
};

const spy = makeObjectSpy(target, "someSpy");

spy.z = 666;

someFunc(spy.n, spy.z);
```

This will produce the following output:

```
Creating object spy "someSpy" for object: {"n":123,"s":"someString"}
Writing value 666 to property "z" on spy "someSpy" in {"n":123,"s":"someString"}.
Reading property "n" on spy "someSpy" in {"n":123,"s":"someString","z":666}.
Reading property "z" on spy "someSpy" in {"n":123,"s":"someString","z":666}.
```

If no target object is specified, a new empty one will be used. If no name is provided, the default name will be used.

### Function Spy

```javascript
import { makeFunctionSpy } from "spyjunk";

const target = (x, y) => x + y;

const spy = makeFunctionSpy(target, "someSpy");

spy(123, "someString");
```

This will produce the following output:

```
Creating function spy someSpy for function: (x, y) => x + y
Called function spy "someSpy" with arguments [123,someString] and context: undefined.
```

If no target object is specified, a new empty function will be used. If no name is provided, the default name will be used.
