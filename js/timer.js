export class Timer {
    #listeners;
    add(listener) {

    }

    remove(listener) {

    }

    start() {
        for(const listener of this.listener) {
            listener();
        }
    }
}

export class TimerListener {
    func;
    constructor(func) {
        this.func = func;
    }
}