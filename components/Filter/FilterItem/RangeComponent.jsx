import styled from 'styled-components';

import { useState } from 'react';

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useUpdateEffect } from '../../../useHooks';


const handleStyle = {
    backgroundColor: '#ffffff',
    width: '20px',
    height: '20px',
    border: '3px solid #5B1717',
    boxShadow: 'none',
    marginTop: '-8px'
}

function RangeComponent({ min, max, setChangeRangeStore }) {

    const [val, setVal] = useState([min, max]);

    useUpdateEffect(() => {
        setChangeRangeStore(val);
    }, [val])

    const updateRange = (e) => {
        setVal(e);
    }

    const changeInputValueMin = (value) => {
        if (value <= max) {
            setVal(pre => [value, pre[1]]);
        }
    }

    const changeInputValueMax = (value) => {
        if (value <= max) {
            setVal(pre => [pre[0], value]);
        }

    }

    return (
        <Section>
            <WraperCout>
                <input type="number" value={val[0]} onChange={event => changeInputValueMin(event.target.value)} max={max} min={min} />
                <Liner />
                <input type="number" value={val[1]} onChange={event => changeInputValueMax(event.target.value)} max={max} min={min} />
            </WraperCout>
            <WraperRange>
                <Range
                    min={min}
                    max={max}
                    step={1}
                    value={val}
                    onChange={updateRange}
                    allowCross={false}
                    pushable={10}
                    trackStyle={[{ backgroundColor: '#5B1717' }]}
                    handleStyle={[handleStyle, handleStyle]}
                    railStyle={{ backgroundColor: '#F6D3C6' }}
                    activeDotStyle={{ boxShadow: 'none', backgroundColor: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />
            </WraperRange>


        </Section>
    )
}

export default RangeComponent;

const Liner = styled.div`
    width: 20px;
    height: 3px;
    background-color: #5B1717;
`;

const WraperRange = styled.div`
    max-width: 190px;
    margin: 0 auto;
`;

const WraperCout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    input {
        width: 80px;
        height: 30px;
        border: 1px solid #F7D3C6;
        padding-left: 12px;
        padding-top: 12px;
        padding-bottom: 12px;
    }

`;

const Section = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
    
`;
