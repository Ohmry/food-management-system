import Vue from 'vue'

import AppConfirmConfig from './AppConfirm'
import AppConfirm from './AppConfirm/AppConfirm'
import AppSnackBarConfig from './AppSnackBar'
import AppSnackBar from './AppSnackBar/AppSnackBar'

import AppButton from './AppButton'
import AppCurrencyField from './AppCurrencyField'
import AppDialog from './AppDialog'
import AppNavigator from './AppNavigator'

import ViewTitle from './ViewTitle'
import ViewSubTitle from './ViewSubTitle'

Vue.use(AppConfirmConfig)
Vue.use(AppSnackBarConfig)

Vue.component('AppConfirm', AppConfirm)
Vue.component('AppButton', AppButton)
Vue.component('AppCurrencyField', AppCurrencyField)
Vue.component('AppDialog', AppDialog)
Vue.component('AppNavigator', AppNavigator)
Vue.component('AppSnackBar', AppSnackBar)
Vue.component('ViewTitle', ViewTitle)
Vue.component('ViewSubTitle', ViewSubTitle)
