import styled from 'styled-components';




function Filter({ title, children, marginTop = '0' }) {
    return (
        <FilterStyle marginTop={marginTop}>
            <form onSubmit={event => (event.preventDefault())}>
                <div className='filter-title'>
                    <h3>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className='filter-icon'>
                            <line x1="0.5" y1="1.37939" x2="11.5" y2="1.37939" stroke="#562F2F" strokeLinecap="round" />
                            <line x1="0.5" y1="5.3584" x2="11.5" y2="5.3584" stroke="#562F2F" strokeLinecap="round" />
                            <line x1="0.5" y1="9.3374" x2="11.5" y2="9.3374" stroke="#562F2F" strokeLinecap="round" />
                        </svg>

                        {title}
                    </h3>
                </div>
                {children}
            </form>
        </FilterStyle>
    )
}

export default Filter;

const FilterStyle = styled.section`
    padding: 15px 0;
    padding-bottom: 0;
    min-width: 270px;
    max-width: 270px;
    background: #FFEFE9;
    border: 1px solid #F7D3C6;
    height: fit-content;
    
    .filter-title {
        border-bottom: 1px solid #F7D3C6;
    }

    .filter-icon {
        margin-right: 10px;
    }

    h3 {
        font-family: PT Serif; 
        text-transform: uppercase;
        color: #562F2F;
        letter-spacing: 0.1em;
        font-size: 24px;
        margin-bottom: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`;



