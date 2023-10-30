import React from 'react';

const Table = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No hay datos para mostrar.</p>;
    }

    const headers = Object.keys(data[0]);

    return (
        <div>
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => (
                <th key={index}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item, rowIndex) => (
                <tr key={rowIndex}>
                {headers.map((header, columnIndex) => (
                    <td key={columnIndex}>{item[header]}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default Table;
