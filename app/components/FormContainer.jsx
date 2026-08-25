import {useEffect} from 'react'
import GlobalForm from './GlobalForm'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '@/Redux/slices/formPopup';

const FormContainer = () => {
   const dispatch = useDispatch();
   const open = useSelector(state => state.form.formOpen)

   useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

    return (<>
    {open && (    <div
      className={`
        fixed inset-0 z-9
        overflow-hidden
        flex items-center justify-center
        p-4
        bg-black/10 backdrop-blur-sm
        transition-all duration-300 ease-out
        ${open ? "visible opacity-100" : "invisible opacity-0"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          w-full max-w-md
          rounded-2xl
          p-1
          border border-zinc-200
          bg-black/35
          backdrop-blur-2xl
          shadow-2xl
          transition-all duration-300 ease-out
          ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-95 opacity-0"
          }
        `}
      >
        <div className="mx-4 flex items-center justify-between border-b border-zinc-200 py-3">
          <h6 className="font-Jakarta text-sm font-semibold text-zinc-100 lg:text-base">
            Send Your Query
          </h6>

          <button
            type="button"
            onClick={() => dispatch(togglePopup())}
            className="rounded-lg p-1 text-zinc-500 cursor-pointer transition-colors hover:bg-zinc-700 hover:text-zinc-900"
          >
            <RxCross2 className="size-5 text-zinc-100 font-semibold" />
          </button>
        </div>

        <div className="p-4">
          <GlobalForm />
        </div>
      </div>
    </div>)}
    </>
  )
}

export default FormContainer