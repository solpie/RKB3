import { loadRes, imgToTex, newBitmap } from './PixiEx';

class ImgLoader {
    _texMap = {}
    loadTex(url, callback) {
        if (!this._texMap[url]) {
            loadRes(url, (img) => {
                this._texMap[url] = imgToTex(img)
                callback(this._texMap[url])
            }, true);
        }
        else
            callback(this._texMap[url])
    }


    loadTexRemote(url, callback, isCrossOrigin = true) {
        if (url.charAt(0) == '/')
            isCrossOrigin = false
        if (!this._texMap[url]) {
            loadRes(url, (img) => {
                this._texMap[url] = img
                callback(this._texMap[url])
            }, isCrossOrigin);
        }
        else
            callback(this._texMap[url])
    }

    loadTexArr(urlArr, callback, isCrossOrigin = false) {
        let recur = () => {
            if (urlArr.length)
                this.loadTexRemote(urlArr.pop(), _ => {
                    recur()
                }, isCrossOrigin)
            else
                callback()
        }
        recur()
    }
    getTex(url) {
        return imgToTex(this._texMap[url])
    }
    getTexBySp(url) {
        let sp = newBitmap({ url: url })
        return sp.texture
    }
}
export const imgLoader = window['imgLoader'] = new ImgLoader()