import AppConfirm from './AppConfirm'
import { events } from './events'


export default {
  install (Vue) {
    if (this.installed == true) return
    this.installed = true

    Vue.component('AppConfirm', AppConfirm)

    const confirm = params => {
      if (typeof params != 'object' || Array.isArray(params)) {
        let caughtType = typeof params
        if (Array.isArray(params)) caughtType = 'array'

        throw new Error(
          `Options type must be an object. Caught: ${caughtType}. Expected: object`
        )
      }

      if (typeof params === 'object') {
        if (Object.prototype.hasOwnProperty.call(params, 'callback') && typeof params.callback != 'function') {
          let callbackType = typeof params.callback
          throw new Error(
            `Callback type must be an function. Caught: ${callbackType}. Expected: function`
          )
        }
        events.$emit('open', params)
      }
    }

    confirm.close = () => {
      events.$emit('close')
    }
    
    Vue.prototype.$confirm = confirm
    Vue['$confirm'] = confirm
  }
}