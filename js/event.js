class Event extends EventTarget {
    constructor() {
        super();
    }

    addEventListener(type, callback) {
        super.addEventListener(type, callback);
    }

    removeEventListener(type, callback) {
        super.removeEventListener(type, callback);
    }

    triggerEvent(type, detail) {
        const event = new CustomEvent(type, { detail });
        this.dispatchEvent(event);
    }
}

export default Event;