import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom'

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             text: ''
//         }
//     }

//     componentDidMount() {
//         console.log('component did mount');
//     }
//     componentDidUpdate() {
//         console.log('component did update');
//     }

//     render() {
//         return (
//             <div>
//                 <p>Butona {this.state.count} kez tıkladınız</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
//             </div>
//         )
//     }
// }

const App = (props) => {
    const [count,setCount] = useState(props.count);
    const [text,setText] = useState(props.text);

    useEffect(()=> {
        console.log('count');
        localStorage.setItem('count',count)
    }, [count])

    useEffect(()=> {
        console.log('componentDidMount');

        const countData = localStorage.getItem('count');

        if(countData) {
            setCount(Number(countData))
        }
    }, [])

    useEffect(()=> {
        console.log('componentDidMount - componentDidUpdate');
    })

    return (
        <div>
            <p>Butona {count} kez tıkladınız</p>
            <p>Girilen text: {text}</p>
            <button onClick={()=> setCount(count+1)}>+1</button>
            <button onClick={()=> setCount(count-1)}>-1</button>
            <button onClick={()=> setCount(props.count)}>Number Reset</button>
            <button onClick={()=> setText(props.text)}>Text Reset</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}  />
        </div>
    )
}

App.defaultProps = {
    count: 5,
    text: ''
}

// function App(props) {
//     return (
//         <div>
//             function component
//         </div>
//     )
// }


ReactDOM.render(<App />, document.getElementById('root'));