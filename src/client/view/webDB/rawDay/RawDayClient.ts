declare let io;
export class RawDayClient {
    srvIO: any
    testPlayerId:number
    constructor() {
        // let srvIO = io.connect('http://port-3000.meican-rkb.codeanyapp.com/rawday')
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
                this.testPlayerId = data.leftPlayer.playerId
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
            // _: null
            playerId:this.testPlayerId
        })
    }

    drop() {
        this.srvIO.emit('drop', {
            playerId: this.testPlayerId
        })
    }
}