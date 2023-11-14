"use client"
import { toast, Toaster } from "sonner"

const Detalle = () => {
  return (
    <div className="flex-col">
      <h1>Detalle</h1>
      <Toaster richColors />
      <button onClick={ ()=> toast.success("Event has been created")}>
        <span>Click me success</span>
      </button>
      <button onClick={ ()=> toast.error("Event has been created")}>
        <span>Click me error</span>
      </button>
    </div>
  )
}
export default Detalle