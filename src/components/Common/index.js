import Vue from 'vue'

import AppButton from './AppButton'
import AppConfirmConfig from './AppConfirm'
import AppConfirm from './AppConfirm/AppConfirm'
import AppCurrencyField from './AppCurrencyField'
import AppDialog from './AppDialog'
import AppNavigator from './AppNavigator'
import AppSnackBar from './AppSnackBar'
import ViewTitle from './ViewTitle'
import ViewSubTitle from './ViewSubTitle'

Vue.use(AppConfirmConfig)

Vue.component('AppConfirm', AppConfirm)
Vue.component('AppButton', AppButton)
Vue.component('AppCurrencyField', AppCurrencyField)
Vue.component('AppDialog', AppDialog)
Vue.component('AppNavigator', AppNavigator)
Vue.component('AppSnackBar', AppSnackBar)
Vue.component('ViewTitle', ViewTitle)
Vue.component('ViewSubTitle', ViewSubTitle)
