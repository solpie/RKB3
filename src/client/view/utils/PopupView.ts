export interface IPopup {
    create: (parent) => void
    show: (param: any) => void
    hide: (param?: any) => void
}

export class PopupView {
    ctn: PIXI.Container
    popupItemMap = {}

    constructor(parent) {
        this.ctn = parent
    }

    show(cls, param) {
        if (cls.class) {
            if (!this.popupItemMap[cls.class]) {
                this.popupItemMap[cls.class] = new cls()
                this.popupItemMap[cls.class].create(this.ctn)
            }
            (this.popupItemMap[cls.class] as IPopup).show(param)
        }
        else throw 'check class def' + cls
    }

    hide(cls, param?) {
        if (this.popupItemMap[cls.class])
            this.popupItemMap[cls.class].hide(param)
    }
}