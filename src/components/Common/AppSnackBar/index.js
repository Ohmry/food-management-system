import AppSnackBar from './AppSnackBar'
import { events } from './events'


export default {
  install (Vue) {
    if (this.installed == true) return
    this.installed = true

    Vue.component('AppSnackBar', AppSnackBar)

    const snackbar = message => {
      if (typeof message != 'string') {
        let messageType = typeof message
        throw new Error (
          `Message type muse be an string. Caught: ${messageType}. Expected: string`
        )
      }
      events.$emit('open', message)
    }

    snackbar.close = () => {
      events.$emit('close')
    }
    
    Vue.prototype.$snackbar = snackbar
    Vue['$snackbar'] = snackbar
  }
}