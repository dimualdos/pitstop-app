'use client'

import { useEffect, FC, ReactNode, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './modal-overlay';
import React from 'react';


type TModal = {
    children: ReactNode;
    onClose: () => void;
    overlay?: boolean;

};

const Modal: FC<TModal> = ({ onClose, children, overlay = true }) => {
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {

        ref.current = document.querySelector<HTMLElement>("#portal");

        setMounted(true);
        const removeModal = (e: KeyboardEvent) => {
            e.key === 'Escape' && onClose();
        }

        ref.current!.classList.add('modalWrapper');
        document.addEventListener('keydown', removeModal);
        return () => {
            setMounted(false)
            document.removeEventListener('keydown', removeModal);
            ref.current!.classList.remove('modalWrapper')
        };

    }, [onClose]);

    return (mounted && ref.current) ? createPortal(
        <div className='absolute top-14'>
            <div  >
                {children}
            </div>
            {overlay ? (<ModalOverlay onClose={onClose} />) : null}
        </div>, ref.current
    ) : null
}

export default Modal;


