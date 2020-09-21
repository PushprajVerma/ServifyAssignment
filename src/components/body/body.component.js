import React, {useState, useEffect} from 'react';
import '../../public/css/style.css';

export default function Body(props) {
    const [showTimer, setTimer] = useState(true);
    const {bodyFontColor, bodyBackgroundColor, fontFamily, timer, timeoutPeriod} = props; 
    const [time, setTime] = useState(timeoutPeriod);

    const styles = {
        color: bodyFontColor,
        backgroundColor: bodyBackgroundColor,
        padding: "10px",
        fontFamily: fontFamily,
        height: '400px',
    }

    const modal = {
        width: "400px",
        position: "absolute",
        top: "200px",
        backgroundColor: "black",
        color: "white",
        marginLeft: "400px",
        textAlign: "center",
        padding: "50px"
    }

    useEffect(() => {
        const a = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        if (time === 0) {
            setTimer(false);
            clearInterval(a);
        }
    }, [time]);

    return (
        <>  
            {timer && showTimer && (
                <div style={modal}>
                    {`Window will diappear in ${time} sec (timer configurable)`}
                </div>
            )}
            {!showTimer && <span style={modal}>Reload to see the timer</span>}
            <div style={styles}>
                <span>MAIN BODY OF WEBSITE</span>
            </div>
        </>
    )
};