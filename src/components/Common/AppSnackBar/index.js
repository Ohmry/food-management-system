import AppSnackBar from './AppSnackBar'
import { events } from './events'


export default {
  install (Vue) {
    if (this.installed == true) return
    this.installed = true

    Vue.component('AppSnackBar', AppSnackBar)

    const snackbar = params => {
      if (typeof params != 'object' || Array.isArray(params)) {
        let caughtType = typeof params
        if (Array.isArray(params)) caughtType = 'array'

        throw new Error(
          `Options type must be an object. Caught: ${caughtType}. Expected: object`
        )
      }

      if (typeof params === 'object') {
        if (Object.prototype.hasOwnProperty.call(params, 'text') && typeof params.text != 'string') {
          let callbackType = typeof params.text
          throw new Error(
            `Text type must be an object. Caught: ${callbackType}. Expected: string`
          )
        }

        events.$emit('open', params)
      }
    }

    snackbar.close = () => {
      events.$emit('close')
    }
    
    Vue.prototype.$snackbar = snackbar
    Vue['$snackbar'] = snackbar
  }
}