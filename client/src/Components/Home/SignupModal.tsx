import * as React from 'react';
import * as UIkit from 'uikit';
import { History } from 'history';
import ApiManager from '../../ApiManager';

type ModalOnClickProps = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type ModalBodyProps = {
    value: string
    type: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type ModalProps = {
    api: ApiManager
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>> 
    modalRef: React.MutableRefObject<any>
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>> 
}

const ModalHeader = ({ onClick }: ModalOnClickProps) => (
    <div className="uk-modal-header">
        <h2 className="uk-modal-title">Confirm Account</h2>
        <button id='close' 
                className="uk-modal-close-default" 
                type="button" 
                onClick={onClick}
                data-uk-close></button>
    </div>
)

const ModalBody = (props: ModalBodyProps) => (
    <div className="uk-modal-body">
        <p>Enter the confirmation code emailed to the address specified</p>
        <input {...props}/>
    </div>
)

const ModalFooter = ({ onClick }: ModalOnClickProps) => (
    <div className="uk-modal-footer">
        <button data-modal-close
                className='uk-button uk-modal-close'
                onClick={onClick}
                type='button'
                id='confirm'>Close</button>
    </div>
)

const Modal = ({api, setAuthenticated, setShowModal, showModal, modalRef }: ModalProps) => {
    const [confirmation, setConfirmation] = React.useState('')
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowModal(false)
        if (e.currentTarget.id == 'confirm' && api.confirmSignup(confirmation)) {
            setAuthenticated(true)
        }
    } 
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setConfirmation(e.currentTarget.value) }
    const inputProps = { value: confirmation, type: 'text', placeholder: 'confirmation code', onChange }

    React.useEffect(() => {
        const modal = UIkit.modal(modalRef.current) 
        showModal ? modal.show() : modal.hide()
        console.log(showModal ? "showing modal" : "hiding modal")
    }, [showModal])
    return (
        <div ref={modalRef} data-uk-modal>
            <div className="uk-modal-dialog">
                <ModalHeader onClick={onClick}/>
                <ModalBody {...inputProps}/>
                <ModalFooter onClick={onClick}/>
            </div>
        </div>
    );
}

export default Modal