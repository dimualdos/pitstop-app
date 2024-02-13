'use client'
import { useEffect, useState } from 'react';

import NavLinks from '@/app/ui/menu/nav-links';
import { useAppDispatch, useAppSelector } from '../services/hooks/hooks';
import clsx from 'clsx';
import Modal from '../modal/modal';
import { openState } from '../services/open-menu-slice';


export default function SideNav() {
  const { value } = useAppSelector(state => state.openStateReduser);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);


  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    dispatch(openState(isOpen));

  }, [dispatch, isOpen]);


  return (
    <nav className="flex h-[85vh]  flex-col  px-2">
      <div className={clsx(
        `  justify-start h-svh flex-col space-x-0 space-y-2 overflow-y-auto overflow-x-hidden hidden  sm:flex  `,
      )}>
        <NavLinks />
      </div>
      {value ? <Modal onClose={handleClose} overlay={true}>
        <div className={clsx(
          `  justify-start h-svh  flex-col space-x-0 space-y-2 overflow-y-auto  flex dark:bg-[#142030] bg-slate-300  sm:hidden  `,
        )}>
          <NavLinks />
        </div>
      </Modal> : null
      }

    </nav>
  );

}

