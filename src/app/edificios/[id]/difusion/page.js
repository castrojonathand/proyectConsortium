import React from 'react'
import ReadExcel from '@/Components/ReadExcel'
import { jsPDF } from "jspdf";
import { PDFDownloadLink } from '@react-pdf/renderer';
import Table from '@/Components/Table';

const Difusion = () => {

    const crearPDF = () => {
        const doc = new jsPDF();
        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");

    }

    return (        
        <>
            <div className="flex justify-between p-2 text-center">            
                <div className='p-2'>Difusion</div>                
                <button className="btn btn-primary bg-[#4F81BD] p-2 text-white rounded-md" >Exportar a PDF</button>

            </div>     
            <ReadExcel />
        </>    
    )
}
export default Difusion