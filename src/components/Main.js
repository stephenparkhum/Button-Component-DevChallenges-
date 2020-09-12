import React from 'react';
import Button from './Button';

const Main = () => {
    return (
        <>
            <Button 
                title='Default'  
                link='http://facebook.com'
                variant='default'
            />
            <Button 
                title='Variant'
                link='http://youtube.com'
                variant='outline'
            />
            <Button 
                title='Text'
                link='http://youtube.com'
                variant='text'
            />
        </>
    )
};

export default Main;