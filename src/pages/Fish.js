import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Fish() {
    
    const [searchParams] = useSearchParams();

    return <main className={`fish ${searchParams.get('darkMode') ? 'dark': null}`}>
        <h1> Fish </h1>
    </main>

}

export default Fish;