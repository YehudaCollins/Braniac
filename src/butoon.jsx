import React, { useState, useEffect } from 'react';

function Butoon() {
    const [dataFromCSharp, setDataFromCSharp] = useState('');

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.text())
            .then(data => {
                console.log(data); // יודפס "Hello from C#!"
                // כאן תוכל לעשות משהו עם הנתונים שהתקבלו מ-C#
                setDataFromCSharp(data); // מעדכן את הנתונים בסטייט של הריאקט
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []); // useEffect יפעל רק פעם אחת לאחר העמעום הראשי של הרכיב

    return (
        <div>
            <h1 style={{ color: 'white' }}>{dataFromCSharp}</h1>
        </div>
    );
}

export default Butoon;
