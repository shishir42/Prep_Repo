const source1 = { foo: 1 };
const source2 = { bar: 2 };
const target = { ...source1, ...source2 };
target.bar = 4;
console.log(target);
console.log(source1);
console.log(source2);