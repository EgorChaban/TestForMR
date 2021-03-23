import axios from "axios";

enum ACTION_TYPE {
    CHANGE_VALUE = 'CHANGE_VALUE',
    COMPARE_LENGTH = 'COMPARE_LENGTH',
    CHANGE_CHECK_VALUE = 'CHANGE_CHECK_VALUE',
    GET_DATA = 'GET_DATA'
}

export type stateType = {
    data: Array<string>
    state: Array<string>
    value: string
    checkValue: boolean
}


type ActionType =
    changeValueACType
    | compareLengthACType
    | changeCheckValueACType
    | getDataACType


export const Reducer = (iniState: stateType, action: ActionType): stateType => {
    switch (action.type) {
        case ACTION_TYPE.CHANGE_VALUE: {
            return {...iniState, value: action.value}
        }

        case ACTION_TYPE.COMPARE_LENGTH: {
            if (Number(action.value)) {

                    return {...iniState, state: action.data.filter(i => i.length > Number(action.value))}

            } else {
                    let flag
                    iniState.checkValue ? flag = 'g' : flag = 'gi'
                    let regexp = new RegExp(action.value, flag)
                    return {...iniState, state: action.data.filter(i => i.match(regexp))}
            }
        }

        case ACTION_TYPE.CHANGE_CHECK_VALUE: {
            return {...iniState, checkValue: action.checkValue}
        }


        case ACTION_TYPE.GET_DATA: {
            return { ...iniState, data: action.data }
        }
        default: return iniState
    }
}


type changeValueACType = ReturnType<typeof changeValueAC>
export const changeValueAC = (value: string) => {
    return {
        type: ACTION_TYPE.CHANGE_VALUE, value
    } as const
}


type compareLengthACType = ReturnType<typeof compareLengthAC>
export const compareLengthAC = (data: Array<string>, value: string) => {
    return {
        type: ACTION_TYPE.COMPARE_LENGTH, data, value
    } as const
}


type changeCheckValueACType = ReturnType<typeof changeCheckValueAC>
export const changeCheckValueAC = (checkValue: boolean) => {
    return {
        type: ACTION_TYPE.CHANGE_CHECK_VALUE, checkValue
    } as const
}


type getDataACType = ReturnType<typeof getDataAC>
export const getDataAC = (data: Array<string>) => {
    return {
        type: ACTION_TYPE.GET_DATA, data
    } as const
}

export const fetchData = (dispatch: (g: getDataACType) => void) => {
    axios.get('/data.json')
        .then((res) => {
            dispatch(getDataAC(res.data.data  ))
        })
}


