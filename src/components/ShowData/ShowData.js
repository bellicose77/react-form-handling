import React from 'react';

const ShowData = () => {
    let data = sessionStorage.getItem('formData')
    let finalData=JSON.parse(data)
    
    return (
        <div>
            <h2>This is another page:{finalData?.name}</h2>
        </div>
    );
};

export default ShowData;