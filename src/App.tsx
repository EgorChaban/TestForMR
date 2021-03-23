import React, {ChangeEvent, useEffect, useReducer} from 'react';
import  './App.css';
import {
    changeCheckValueAC,
    changeValueAC,
    compareLengthAC, fetchData,
    Reducer
} from "./state/Reducer";


function App() {

    useEffect( () => {
        fetchData(dispatch)
    }, [] )

    let [initialState, dispatch] = useReducer(Reducer, {
        data: [''],
        state: [],
        value: '',
        checkValue: false
    })


    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeValueAC(e.currentTarget.value))
    }


    const compareLength = () => {
        dispatch(compareLengthAC(initialState.data, initialState.value))
    }


    const changeCheckValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCheckValueAC(e.currentTarget.checked))
    }

///фывфывфывыфв
    return (
        <div className="App">
            <div className={'wrapper'}>
                <input
                    className={'input'}
                    onChange={changeValue}
                    value={initialState.value}
                />
                <div className={'btnWrap'}>
                    <input
                        className={'checkbox'}
                        type="checkbox"
                        checked={initialState.checkValue}
                        onChange={changeCheckValue}
                    />
                    <button className={'button'} onClick={compareLength}>
                        length
                    </button>
                    <button className={'button'} onClick={compareLength}>
                        substring
                    </button>
                </div>
                <ul className={'ul'}>{
                    initialState.state?.map((s, index) => {
                            return (
                                <li className={'li'}
                                    key={index}>
                                    {s}
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App;
