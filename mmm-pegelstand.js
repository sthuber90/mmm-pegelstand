/* global Module */

Module.register('mmm-pegelstand', {
  defaults: {
    floodLimit: 105,
    refreshInterval: 60 * 1000 * 15, // 15 minutes
  },

  start: function () {
    Log.log('Starting module: ' + this.name)
    this.sendSocketNotification('GET_PEGEL', {
      refreshInterval: this.config.refreshInterval,
      pgnr: this.config.pgnr,
    })
  },

  socketNotificationReceived: function (notification, payload) {
    Log.log(
      this.name +
        ' received a socket notification: ' +
        notification +
        ' - Payload: ' +
        payload
    )
    const containerDiv = document.createElement('div')
    const pegelSpan = document.createElement('span')
    pegelSpan.innerHTML = `${payload[4]} ${payload[5]}`
    // convert string to int
    const pegel = parseInt(payload[4])
    pegelSpan.style.fontWeight = 'bold'
    if (pegel > this.config.floodLimit) {
      pegelSpan.style.color = '#ff4500'
    }

    containerDiv.innerHTML = `Pegelstand ${payload[2]}: `
    containerDiv.appendChild(pegelSpan)
    this.pegelDiv.appendChild(containerDiv)
  },

  suspend: function () {
    this.sendSocketNotification('GET_PEGEL_SUSPEND', {})
  },

  resume: function () {
    this.sendSocketNotification('GET_PEGEL', {
      refreshInterval: this.config.refreshInterval,
      pgnr: this.config.pgnr,
    })
  },

  getDom: function () {
    const wrapper = document.createElement('div')
    this.pegelDiv = document.createElement('div')
    wrapper.appendChild(this.pegelDiv)

    return wrapper
  },
})
