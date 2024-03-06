export class Timer {
    #listeners;
    tickEvent;

    timeId;
    tickSpeed = 1000;
    timerPaused = false;

    constructor(event) {
        this.tickEvent = event;
    }

    start() {
        if (this.timerId == undefined || this.timerId == null) {
            this.timerId = setInterval(() => {
                
                if (!this.timerPaused) {
                    this.tickEvent.triggerEvent('tick', {});
                }

            }, this.tickSpeed)
        }
    }

    pause() {
        this.timerPaused = true;
    }

    resume() {
        this.timerPaused - false;
    }
 
    stop() {
        if (this.timerId != undefined || this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
}

export default Timer;