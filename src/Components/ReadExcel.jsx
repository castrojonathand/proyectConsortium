import React from 'react'
import xlsx from 'read-excel-file'

const excelFile = "Hola"
console.log("excelFile>>>",excelFile)

const ReadExcel = () => {
    return (
        <div className='mt-4'>
            <input type="file"/>
        </div>
    )
}

export default ReadExcel