

const dev = false;



exports.server_config = {
    monitor_url: dev ? "http://localhost:9999" : "http://aquapatina-node.my.ava.do:9999",
    //monitor_url: "http://localhost:9999",
    ssv_api_url: "https://api.ssv.network/api/v4",
}
