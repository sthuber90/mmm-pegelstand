/* eslint-disable no-unused-vars */
/* global Module */

const NodeHelper = require('node_helper')
const HVZ_Site = {}

// the main module helper create
module.exports = NodeHelper.create({
  // subclass start method, clears the initial config array
  start: function () {
    this.reloadTimer = null
  },

  socketNotificationReceived: function (notification, payload) {
    if (notification === 'GET_PEGEL') {
      this.get_pegel(payload)
    } else if (notification === 'GET_PEGEL_SUSPEND') {
      clearTimeout(this.reloadTimer)
    }
  },

  get_pegel: function (payload) {
    clearTimeout(this.reloadTimer)
    const that = this
    this.reloadTimer = setTimeout(function () {
      fetch('https://www.hvz.baden-wuerttemberg.de/js/hvz_peg_stmn.js')
        .then((res) => res.text())
        .then((res) => {
          eval(res)
          that.sendSocketNotification(
            'PEGEL',
            Array.from(HVZ_Site.PEG_DB).filter((i) => i[0] === payload.pgnr)[0]
          )
        })
    }, payload.reloadInterval)
  },

  stop: function () {
    clearTimeout(this.reloadTimer)
  },
})
