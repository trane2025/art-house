import styled from 'styled-components'

function Container(props) {
    return (
        <>
            <ContainerStyle>
                {props.children}
            </ContainerStyle>
        </>
    )
}

export default Container

const ContainerStyle = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
