import React from 'react';
import '../../public/css/style.css';

export default function footer(props) {
    const {footerValue} = props;

    function footerList(item) {
        return <a>{item}</a>
    }

    return (
        <>
            <div className="footer">
            <span>Footer value fetched from config files</span>
                {
                    footerValue.map((item) => {
                        return footerList(item);
                    })
                }
            </div>
        </>
    )
};