'use client'
import { FC } from 'react';


type TModalOverlay = {
    onClose: () => void;
}
// const OverlayLink = styles.div`
//     background-color: #F2F2F2;
//     opacity: 0.2;
//     z-index: 14;
//     cursor: pointer;
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0
// `;


// const OverlayLinkTasks = styled(Box)(({ theme }) => ({
//     background: theme.palette.mode === "dark" ?
//         '100% linear-gradient(to right, #01333F, #02124A)' :
//         'linear-gradient(to right, #0C5D71, #041654) transparent',
//     opacity: 0.8,
//     zIndex: 14,
//     cursor: 'pointer',
//     position: 'fixed',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
// }));

const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {
    return (
        <div onClick={onClose} className='bg-slate-50/5  fixed top-0 bottom-0 left-0 right-0'></div>
    )
}

export default ModalOverlay;