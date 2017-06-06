declare let io;
export class RawDayClient {
    constructor() {
        let srvIO = io.connect('/livedata')
            // .on('connection', (socket) => {
            //     socket.emit('start',  { _: null });
            //     console.log('RawDayClient connection')
            //     // srvIO.emit('start', { _: null })
            // })
            .on('connect', () => {
                console.log('RawDayClient connect',srvIO)
                srvIO.emit('start',  { _: null });
                // srvIO.emit('start', { _: null })
            })
            .on('init', (data) => {
                console.log('sc init', data)
            })
            .on('pull', (data) => {
                console.log('sc pull', data)
            })
            .on('cs_start', (data) => {
                console.log('cs_start', data)
            })
    }
}