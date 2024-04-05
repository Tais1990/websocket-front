
const defaultConfig = {
  port: 3200,
  api: {
    port: 8000,
    host: 'localhost',
    webSocketURL: 'ws://127.0.0.1:8000/message'
  },

}

let conf = {
  dev: defaultConfig,
  prod: defaultConfig
}

export default (mode) => conf[mode];