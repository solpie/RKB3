export class Text2 extends PIXI.Text {
    setParent(p) {
        p.addChild(this)
        return this
    }
    setText(str) {
        this.text = str
        return this
    }
    setX(x) {
        this.x = x
        return this
    }
    setY(v) {
        this.y = v
        return this
    }
    setPos(x, y) {
        this.x = x
        this.y = y
        return this
    }
    setAlignRight(v) {
        return this.setX(v - this.width)
    }
    setAlignCenter(v) {
        return this.setX(v - this.width * .5)
    }
}
export class TextFac {
    static new_(style, parent?): Text2 {
        let t = new Text2('', style)
        if (parent)
            parent.addChild(t)
        return t
    }
}