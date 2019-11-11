import { loadRes, imgToTex, newBitmap } from './PixiEx';
import { paddy } from './JsFunc';
declare let JSZip;
declare let JSZipUtils;
class ImgLoader {
    _texMap = {}
    _zipMap = {}
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
    // /img/fx1/{x}.png
    get_texture_from_zip(zip_url, callback) {

        var promise = new JSZip.external.Promise(function (resolve, reject) {
            JSZipUtils.getBinaryContent(zip_url, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });

        promise.then(JSZip.loadAsync)
            .then(function (zip) {
                console.log(zip);
                imgLoader._zipMap[zip_url] = {}
                let count = 0
                for (let key in zip.files) {
                    count++
                    //判断是否是文件夹
                    if (!zip.files[key].dir) {
                        var base = zip.file(zip.files[key].name).async("base64");
                        base.then(function (res) {
                            let img = new Image()
                            img.src = 'data:image/png;base64,' + res
                            img['key'] = key
                            img.onload = (e) => {
                                count--
                                let texture = imgToTex(img)
                                let texture_map = imgLoader._zipMap[zip_url]
                                texture_map[e.target['key']] = texture
                                // console.log('jszip tex key', e)
                                if (count == 0) {
                                    callback(texture_map)
                                }
                                else {
                                    // console.log('jszip left', count)
                                }
                            }
                        })
                    }
                }
            })
            .then(
                function success(data) {
                    console.log('jszip on sus', data)
                }, function error(e) {
                });



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