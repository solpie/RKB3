import { fitWidth } from '../panel/stageOnline/bracket/BracketGroup';
export class Text2 extends PIXI.Text {

    setParent(p) {
        p.addChild(this)
        return this
    }
    setText(str) {
        this.text = str
        return this
    }
    setAddNum(v) {
        return this.setText(Number(this.text) + v)
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
    setFill(v) {
        this.style.fill = v
        return this
    }
    setSize(v) {
        this.style.fontSize = v
        return this
    }
    setLimitWidth(width, sizeFrom) {
        fitWidth(this, width, sizeFrom)
        return this
    }
    alignRight: number = 0
    alignCenterX: number = 0
    setAlignRight(v) {
        if (!v)
            return this.setX(this.alignRight - this.width)
        return this.setX(v - this.width)
    }
    setAlignCenter(v?) {
        if (!v)
            v = this.alignCenterX
        this.alignCenterX = v
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