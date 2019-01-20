import { formatSecond, format10ms } from "./JsFunc";
import { TimerEvent } from "../const";
import { TextStyle } from "pixi.js";
const TimerState = {
  PAUSE: 0,
  RUNNING: 1
};
export class TextTimer extends PIXI.Text {
  timeInSec = 0;
  resetTime = 0
  timerId = null;
  timerState;
  isMin = false;
  isSecOnly = false
  isMsTimer = false;
  formatTime: any
  isTimeOut = false

  constructor(text?: string, style?: TextStyle, resolution?: number) {
    super(text, style, resolution)
    this.formatTime = formatSecond
  }

  setTimerEvent(data) {
    if (data.event == TimerEvent.PAUSE) {
      this.toggleTimer(TimerState.PAUSE);
    } else if (data.event == TimerEvent.START) {
      this.toggleTimer(TimerState.RUNNING);
    } else if (data.event == TimerEvent.RESET) {
      this.toggleTimer(TimerState.PAUSE);
      this.resetTimer();
    } else if (data.event == TimerEvent.SETTING) {
      this.setTimeBySec(data.param);
    }
    else if (data.event == TimerEvent.TOGGLE) {
      this.toggleTimer();
    }
  }

  set textInSec(v) {
    this.setTimeBySec(v);
  }

  setTimeBySec(sec) {
    this.timeInSec = sec;
    this.text = this.formatTime(this.timeInSec, this.isSecOnly);
  }
  pauseTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = 0;
      this.timerState = TimerState.PAUSE;

    }
  }

  toggleTimer(state?) {
    // var pauseTimer = () => {
    //   if (this.timerId) {
    //     clearInterval(this.timerId);
    //     this.timerId = 0;
    //     this.timerState = TimerState.PAUSE;
    //   }
    // };
    if (state != null) {
      if (state == TimerState.PAUSE) this.pauseTimer();
      else if (state == TimerState.RUNNING) this.newTimer();
    } else {
      this.timerId ? this.pauseTimer() : this.newTimer();
    }
  }
  _tickCache = 0
  minUnit = 1
  tick(n = 1) {
    if (n < 1) {
      this._tickCache += n
      n = this._tickCache
    }
    if (n >= 1) {
      this._tickCache = 0
      if (this.isMin) {
        this.timeInSec-=this.minUnit;
        if (this.timeInSec < 0)
          this.timeInSec = 0;

        if (this.timeInSec < 1 && !this.isTimeOut) {
          this.isTimeOut = true
          console.log('timeout', this.timeInSec)
          this.pauseTimer()
          this.emit('timeout', this.timeInSec)
        }
      } else this.timeInSec++;
      this.text = this.formatTime(this.timeInSec, this.isSecOnly);
      this.emit('tick', this.timeInSec)
    }
  }
  newTimer() {
    this.isTimeOut = false
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
    this.timerState = TimerState.RUNNING;
  }
  resetTimer() {
    this.timeInSec = this.resetTime;
    this.timerState = TimerState.PAUSE;
    this.text = this.formatTime(this.timeInSec, this.isSecOnly);
  }
}
export class TextTime10ms extends TextTimer {
  esclaptime: number
  constructor(text?: string, style?: TextStyle, resolution?: number) {
    super(text, style, resolution)
    this.formatTime = format10ms
  }

  newTimer() {
    this.esclaptime = this.timeInSec
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.tick()
    },100);
    this.timerState = TimerState.RUNNING;
  }
}
