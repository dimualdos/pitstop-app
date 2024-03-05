'use client'
import { useEffect, useState } from 'react';

import NavLinks from '@/app/ui/menu/nav-links';
import { useAppDispatch, useAppSelector } from '../services/hooks/hooks';
import clsx from 'clsx';
import Modal from '../modal/modal';
import { openState } from '../services/open-menu-slice';


export default function SideNav() {
  const { isOpen } = useAppSelector(state => state.openStateReduser);
  const dispatch = useAppDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);


  const handleClose = () => {
    setIsOpenModal(false);
    dispatch(openState(isOpenModal));
    console.log(isOpenModal);
  };

  useEffect(() => {
    // dispatch(openState(isOpenModal));
    console.log(isOpen);

  }, [dispatch, isOpen, isOpenModal]);


  return (
    <nav className="flex h-[80vh]  flex-col  px-2">
      <div className={clsx(
        `  justify-start h-svh flex-col space-x-0 space-y-2 overflow-y-auto overflow-x-hidden hidden  sm:flex  `,
      )}>
        <NavLinks />
      </div>
      {isOpen ? <Modal onClose={handleClose} overlay={true}>
        <div className={clsx(
          `  justify-start h-[85vh]  flex-col space-x-0 space-y-2 overflow-y-auto  flex dark:bg-[#142030] bg-slate-300  sm:hidden  `,
        )}>
          <NavLinks />
        </div>
      </Modal> : null
      }

    </nav>
  );

}


