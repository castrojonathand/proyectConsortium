"use client"
import React from 'react'
import * as XLSX from 'xlsx';
import { useState } from 'react';
import Table from './Table';


const ReadExcel = () => {

    const [excelFile,setExcelFile] = useState(null)

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();           
                
            reader.onload = async (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: 'binary' });
    
                const sheetName = workbook.SheetNames[0]
                const worksheet = workbook.Sheets[sheetName];            
                    
                const jsonData = XLSX.utils.sheet_to_json(worksheet);  
                    
                setExcelFile(jsonData)
            };
            
            

        reader.readAsBinaryString(file);
        } 
        
    }
    console.log("ExcelFile>>",excelFile)

    return (
        <div className='mt-4'>
            <input type="file" onChange={handleFileChange}/>
            <Table data={excelFile}/>


        </div>
    )
}
export default ReadExcel