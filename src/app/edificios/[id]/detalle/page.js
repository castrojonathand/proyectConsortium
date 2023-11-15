"use client"
import { toast, Toaster } from "sonner"

const Detalle = () => {
  return (
    <div className="flex-col p-2 flex">
      <h1>Detalle</h1>
      <Toaster richColors />
      <button className="btn btn-primary w-fit bg-[#4F81BD] p-2 my-1 text-white rounded-md" onClick={ ()=> toast.success("Event has been created")}>
        <span>Click me success</span>
      </button>
      <button className="btn btn-primary w-fit bg-[#4F81BD] p-2 my-1 text-white rounded-md" onClick={ ()=> toast.error("Event has been created")}>
        <span>Click me error lorem</span>
      </button>
    </div>
  )
}
export default Detalle