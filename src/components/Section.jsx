import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade direction='up'>
        <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        {/* <Fade direction='up'> */}
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        {/* </Fade> */}
        <DownArrow src='images/down-arrow.svg' />
      </Buttons>
    </Wrap>
    

    



  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;   
  height: 100vh;
  background-image: URL('/images/model-s.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;    
  text-align: center;
  background-image: ${ props => `url("images/${props.bgImg}")`}

`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    

`;

const Buttons =  styled.div`

`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }

`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    color: #fff;
    opacity: 0.85;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    

`;

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: #000;
    opacity: 0.65;
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animationDown infinite 1.5s;
`;