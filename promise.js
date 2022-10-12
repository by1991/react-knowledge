// read: https://www.cnblogs.com/sugar-tomato/articles/11353546.html

class Promise1 {
    static PENDING = 'pending';
    static FULFILLED = 'fullfilled';
    static REJECTED = 'rejected';

    constructor(func) {
        this.status = Promise1.PENDING;
        this.result = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];

        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(result) {
        setTimeout(() => {
            if (this.status === Promise1.PENDING) {
                this.status = Promise1.FULFILLED;
                this.result = result;
                this.resolveCallbacks.forEach(callback => {
                    callback(result);
                });
            }
        });
    }

    reject(result) {
        setTimeout(() => {
            if (this.status === Promise1.PENDING) {
                this.status = Promise1.REJECTED;
                this.result = result;
                this.rejectCallbacks.forEach(callback => {
                    callback(result);
                });
            }
        });
    }

    then(onFufilled, onRejected) {
        return new Promise1((resolve, reject) => {
            onFufilled = typeof onFufilled === 'function' ? onFufilled : () => { };
            onRejected = typeof onRejected === 'function' ? onRejected : () => { };
    
            if (this.status === Promise1.PENDING){
                this.resolveCallbacks.push(onFufilled);
                this.rejectCallbacks.push(onRejected);
            }
            if (this.status === Promise1.FULFILLED) {
                setTimeout(() => {
                    onFufilled(this.result);
                });
            }
            if (this.status === Promise1.REJECTED) {
                setTimeout(() => {
                    onRejected(this.result);
                });
            }
        });
    }
}


console.log("step 1");
let promise = new Promise1((resolve, reject) => {
    console.log("step 2");
    setTimeout(() => {
        resolve("resolved");
        reject("rejected");
        console.log("step 4");
    });
});

promise.then(
    result => { console.log(result) },
    result => { console.log(result.message) }
).then(
    result => { console.log(result) },
    result => { console.log(result.message) }
);

console.log("step 3");