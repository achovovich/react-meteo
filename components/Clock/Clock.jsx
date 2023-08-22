import { useEffect, useState } from 'react';
import { displayNow } from '../../services/date-service.js';
import { Txt } from '../Txt/Txt';
import { s } from './Clock.style';

export function Clock() {
    const [time, setTime] = useState( displayNow() );

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(displayNow());
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <Txt style={s.time}>{ time }</Txt>
    );
}