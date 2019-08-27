import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api/billingCycles'
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}`)    
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}