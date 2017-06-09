export const RawDayCmd = {
    //rawday client
    cs_init: '',
    cs_start: ``,
    cs_push: ``,
    cs_commit: ``,
    cs_fallback: ``,
    cs_drop: ``,
    init: '',
    list: '',
    pull: ``,
    cs_pull: ``,
    //base cmd
    cs_srvCreated: ``,
    sc_srvCreated: ``
}
for (var k in RawDayCmd) {
    RawDayCmd[k] = k;
}