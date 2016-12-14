export class TweenEx {
    //duration ms
    static to(target, duration, vars, callback?) {
        let o = {}
        for (var k in vars) {
            o[k] = target[k]
        }
        return new TWEEN.Tween(o)
            .to(vars, duration)
            .onUpdate(function () {
                for (var k in o) {
                    target[k] = this[k]
                }
            })
            .onComplete(callback)
            .start()
    }
    static tween(target, vars) {
        let o = {}
        for (var k in vars) {
            o[k] = target[k]
        }
        return new TWEEN.Tween(o)
            .onUpdate(function () {
                for (var k in o) {
                    target[k] = this[k]
                }
            })
    }
}