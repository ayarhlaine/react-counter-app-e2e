import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import './Counter.css';
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState('');
    const onIncreaseClick = () => {
        if(counter <= 9){
            setCounter(counter + 1);
            setError('');
        } else{
            setError('Cannot increase greater than 10!')
        }
    }
    const onDecreaseClick = () => {
        if(counter >= 1){
            setCounter(counter - 1);
            setError('');
        } else{
            setError('Cannot decrease less than or equal 0!')
        }
    }
    const onResetClick = () => {
        setCounter(0);
        setError('');
    }
    return (
        <Paper elevation={3} className={'counter'}>
            <h1>Counter App</h1>
            <h3 className="counter__label">
                {counter}
            </h3>
            <div className="counter__buttons">
                <Button variant="contained" onClick={onResetClick}>
                    Reset
                </Button>
                <Button variant="contained" color="secondary" className="counter__decreaseBtn" onClick={onDecreaseClick}>
                    Decrease
                </Button>
                <Button variant="contained" color="primary" className="counter__increaseBtn" onClick={onIncreaseClick}>
                    Increase
                </Button>
            </div>
            {
                error.length > 0 && <Alert severity="error" className="counter__error">{error}</Alert>
            }
        </Paper>
    )
}
export default Counter;
