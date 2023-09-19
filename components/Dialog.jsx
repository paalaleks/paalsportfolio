'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { LuX } from 'react-icons/lu';
import Link from 'next/link';

export default function Dialog({ children }) {
  const searchParams = useSearchParams();
  const dialogRef = useRef(null);
  const showDialog = searchParams.get('showDialog');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeDialog();
        router.push('/#artwork');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (showDialog === 'y') {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showDialog, router]);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const dialog =
    showDialog === 'y' ? (
      <div className="relative">
        <dialog
          ref={dialogRef}
          className="fixed top-50 left-50 -translate-x-50 -translate-y-50"
        >
          <Link
            className="fixed btn top-2 right-2 focus:outline outline-1 outline-offset-2 outline-color1"
            href={'/#artwork'}
          >
            <LuX fontSize={18} onClick={closeDialog} />
          </Link>
          <div>{children}</div>
        </dialog>
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-eerie_black_2"
          onClick={closeDialog}
        />
      </div>
    ) : null;

  return dialog;
}
