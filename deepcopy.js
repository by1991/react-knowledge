function clone(input){
    if(input == null || typeof input != "object") return input;

    const output = Array.isArray(input) ? [] : {};

    for(const key of Object.keys(input)){
        output[key] = clone(input[key]);
    }

    return output;
}

const arr = [1,2,{name: '123'}];
const obj = { name: '123', fields: [1,2,3]};
const arr2 = clone(arr);
const obj2 = clone(obj);

console.log(arr, arr2);
console.log(obj, obj2);
console.log(arr === arr2);
console.log(obj === obj2);
console.log(arr[2] === arr2[2]);
console.log(obj.fields === obj2.fields);