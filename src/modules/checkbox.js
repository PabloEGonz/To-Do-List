class Status {
    constructor(state = false) {
        this.state = state;
    }
    current() {
        return this.state;
    }
    on() {
        return this.state = true;
    }
    off() {
        return this.state = false;
    }
}



export { Status }
