declare let io;
export class RawDayClient {
    srvIO: any
    constructor() {
        let srvIO = io.connect('/livedata')
            // .on('connection', (socket) => {
            //     socket.emit('start',  { _: null });
            //     console.log('RawDayClient connection')
            //     // srvIO.emit('start', { _: null })
            // })
            .on('connect', () => {
                console.log('RawDayClient connect', srvIO)
                // srvIO.emit('start', { _: null });
            })
            .on('init', (data) => {
                console.log('sc init', data)
            })
            .on('pull', (data) => {
                console.log('sc pull', data)
            })
        // .on('cs_start', (data) => {
        //     console.log('cs_start', data)
        // })
        this.srvIO = srvIO
    }

    start() {
        this.srvIO.emit('start', {
            _: null
        })
    }

    push() {
        this.srvIO.emit('push', {
            leftScore: 1, rightScore: 3, leftFoul: 4, rightFoul: 1
        })
    }

    commit() {
        this.srvIO.emit('commit', {
            _: null
        })
    }

    fallback() {
        this.srvIO.emit('fallback', {
            _: null
        })
    }

    drop() {
        this.srvIO.emit('drop', {
            playerId: 2
        })
    }
}