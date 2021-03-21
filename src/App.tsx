import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";


function App() {

        const [state, setState] = useState<any>(null)





    useEffect(() => {
            axios.get('http://alloworigin.com/get?url=http://example.com/https://www.mrsoft.by/data.json/')
                .then((res) => {
                    setState(res.data)
                })
        }, [])

    return (
        <div className="App">
            <input/>
            <input type="checkbox"/>
            <button>length</button>
            <button>str</button>
            <div>{state}</div>
        </div>
    );
}

export default App;
