import { imgLoader } from '../../utils/ImgLoader';
export class BasePanel extends PIXI.Container {
    p: any
    isLoaded: boolean
    tmpData: any
    constructor(parent) {
        super()
        this.p = parent;
    }
    load(imgArr, callback) {
        imgLoader.loadTexArr(imgArr, _ => {
            callback()
            this.isLoaded = true
            if (this.tmpData) {
                this.show(this.tmpData)
                this.tmpData = null
            }
        })
    }
    _show(data) {

    }
    show(data) {
        if (this.isLoaded)
            this._show(data)
        else
            this.tmpData = data


        if (!data.visible)
            this.hide(data)
    }

    hide(data) {
        if (this.parent)
            this.parent.removeChild(this)
    }
}

class _example extends BasePanel {
    create() {
        //load tex here
        return this
    }
    //override _show data
    _show(data) {

    }
}
export function showPanel(cls, data, parent) {
    let clsName = cls.cls
    console.log('show panel ', clsName)
    if (parent[clsName] == null) {
        let clsIns = new cls(parent)
        parent[clsName] = clsIns
        clsIns.create()
    }
    (parent[clsName] as any).show(data)
    return parent[clsName]
}