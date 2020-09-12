import React from 'react';
import Button from './Button';

const Main = () => {

    return (
        <>
            <Button 
                title='Default'  
                link='http://facebook.com'
                variant='default'
                color='danger'
                size='lg'
            />
            <Button 
                title='Variant'
                link='http://youtube.com'
                variant='outline'
                size='md'

            />
            <Button 
                title='Text'
                link='http://youtube.com'
                variant='text'
                color='default'
                size='lg'
            />
            <Button 
                title='No Shadow'
                link='http://youtube.com'
                variant='default'
                disableShadow
                color='secondary'
                size='lg'
            />
        </>
    )
};

export default Main;