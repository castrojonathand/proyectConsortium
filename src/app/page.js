// "use client"
import React from "react";
import { Spinner } from "@nextui-org/spinner"

function HomePage() {
  return (
    <>
      <div className="mx-auto">Hola Home</div>
      <Spinner size="lg" label="Loading..." />
    </>
  )
}
export default HomePage