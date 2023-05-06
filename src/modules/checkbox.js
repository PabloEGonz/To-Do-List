const current = null;
class Status {
  constructor(state = false) {
    this.state = state;
  }

  current() {
    return this.state;
  }

  on() {
    this.state = true;
    return this.state;
  }

  off() {
    this.state = false;
    return this.state;
  }
}

export { Status, current };
