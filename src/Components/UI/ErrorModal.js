import React from 'react';
import classes from './ErrorModal.module.css'
import Card from './Card';
import Button from './Button'
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onOkay}/>;
}
const ModalOverlay = props => {
    return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onOkay}>Okay</Button>
      </footer>
    </Card>
    )
    }

const ErrorModal = (props) =>{
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
            <Backdrop onClick={props.onOkay}/>,
            document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
            <ModalOverlay title={props.title} message={props.message} onOkay={props.onOkay}/>,
            document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}

export default ErrorModal;