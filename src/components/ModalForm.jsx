import React from 'react'

const ModalForm = ({ show, children}) => {
    const showHideClassName = show ? 'modal display-block': 'modal display-none';
  return (
    <div className={showHideClassName}>
        <section className='modal-main min-w-96'>
            {children}
        </section>
    </div>
  )
}

export default ModalForm