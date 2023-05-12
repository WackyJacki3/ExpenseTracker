import React from 'react'
import Modal from 'react-modal';
import './SuccessModal.css'
import { Link } from 'react-router-dom';

const SuccessModal = ({ modalOpen, setModalOpen }) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: "#D86E51",
          borderRadius: "12px",
        },
    };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
        <div className="modalInner">
            <label>Expense Added Successfully</label>
            <img src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg3M2JhdGNoNS1hdW0tMjcuanBn.jpg' alt='Expense Added' className='addedImage' />
            <Link to='/'>
            <div className='takeHomeButton'>
                Home
            </div>
            </Link>
        </div>
    </Modal>
  )
}

export default SuccessModal