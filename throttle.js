function throttle1(func, delay) {
    let timer;

    return function () {
        let context = this;
        let args = arguments;

        if (timer) {
            return;
        }
        timer = setTimeout(function () {
            func.apply(context, args);
            timer = null;
        }, delay);
    }
}

function throttle2(func, delay) {
    let pre = 0;

    return function () {
        let now = new Date();
        let context = this;
        let args = arguments;

        if (now - pre > delay) {
            func.apply(context, args);
            pre = now;
        }
    }
}