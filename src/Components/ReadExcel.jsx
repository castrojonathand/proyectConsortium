"use client"
import React from 'react'
import * as XLSX from 'xlsx';
import { useState } from 'react';
import Table from './Table';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

const ReadExcel = () => {

    const [excelData,setExcelData] = useState(null)

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
                    
                setExcelData(jsonData)
            };
        reader.readAsBinaryString(file);
        }         
    }
    const crearPDF = () => {  

        const doc = new jsPDF();

        doc.text("Reporte de datos", 14, 15);

        autoTable(
            doc,
            {   
                startY: 20,
                html: '#table',
                theme: 'grid',
                columnStyles: {
                0: { cellWidth: 8 }, 
                1: { cellWidth: 12 }, 
                2: { cellWidth: 25 },
                },
            },
            
        )
        doc.save("export.pdf");

    }
    const handleClick = () => {
        crearPDF()
    }

    console.log("ExcelFile>>",excelData)   
    
    return (
        <>  
            <div className='m-4'>
                <button className="btn btn-primary bg-[#4F81BD] p-2 text-white rounded-md" onClick={handleClick}>
                    Generar PDF
                </button>
                <div className='mt-4'>
                    <input type="file" onChange={handleFileChange}/>
                    <Table data={excelData}/>
                </div>                
            </div>      
        </>
    )
}
export default ReadExcel