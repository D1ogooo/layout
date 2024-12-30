import styled from "styled-components";
import BackgroundImage from './assets/Component 10.png'

export const Main = styled.main`
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  height: calc(100vh - 30vh);
  width: 70%;
`;

export const ContentFirst = styled.div`
  background-image: url("../assets/background-game.602c4786.svg") no-repeat center center;
  background-size: cover;
  
  width: 90rem;
  height: 33.5rem;
  display: flex;
  color: #fff;
  background-color: rgba(26, 36, 45, 0.7);
  margin-top: -2.9rem;

  .hr_feast {
    display: flex;
    width: 1px;
    height: 100%;
    background-color: #323b45;
    margin-left: 2rem;
  }
`;

export const Left = styled.section`
  width: 22rem;
  margin-left: 2rem;
  position: relative;
  display: flex;
  flex-direction: column; 
`;

export const Right = styled.section`
  /* width: 41.7rem; */
  width: 100%;
  padding-top: 0.6rem;
  padding-left: 5.3rem;
  background-image: url(${BackgroundImage}); 
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat; 
  background-color: rgba(26, 36, 45, 0.7);

  div {
    display: flex;
    flex-wrap: wrap;
    margin: 0.1rem;
    gap: 0;
  }
`;



export const Internal = styled.section`
  margin-top: 1rem;
  margin-left: 1rem;
  .first_label {
    display: flex;
    align-items: center;
    background: #0f1923;
    padding-right: 20px;
    border-radius: 5px;
    color: #fff;
  }

  .first_button, .second_button {
    height: 2.5rem;
    width: 2.7rem;
    background: none;
    border: solid 1px #323b45;
    margin-left: .0625rem;
    border-radius: .3125rem;
  }

  .second_label {
    display: flex;
    flex-direction: column;
    color: #6d7b95;
    margin-top: .4rem;
    font-weight: 500;
    font-size: .75rem;
    input {
      margin-top: .0625rem;
    }
  }

  p {
    font-weight: 500;
  }

  input:nth-child(1) {
    background: #0f1923;
    width: 13.5rem;
    height: 2.5rem;
    border-radius: 0.3125rem;
    outline: none;
    color: #fff;
  }

  .ValoresGanhados {
    display: flex;
    width: 6.25rem;
    margin-top: .5rem;
    gap: 1rem;
    label {
     display: flex;
     flex-direction: column;
     color: #6d7b95;
     font-weight: 500;
     font-size: .75rem;
     input {
      margin-top: .0625rem;
      background: #0f1923;
      width: 13.5rem;
      height: 2.5rem;
      border-radius: 0.3125rem;
      outline: none;
      color: #fff;
     }
    }
  }

  ::placeholder {
    margin-top: -1.25rem;
    font-size: 0.6875rem;
  }

  &:focus {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
  }
`;

export const SelectStyled = styled.select`
  background: none;
  width: 100%;
  border: 0.125rem solid #323b45;
  border-radius: 0.625rem;
  padding: 0.625rem;
  color: #323b45;
  font-size: 1rem;
  appearance: none;
  cursor: pointer;
  outline: none;
  background-image: url('https://blaze.com/static/media/arrow-down-select.abbfcd40.svg');
  background-repeat: no-repeat;
  background-position: right 0.625rem center;
  background-size: 1.25rem 1.25rem;

  option {
    color: #323b45;
  }

  &:focus {
    border-color: #555;
  }
`;

export const Comecar = styled.div`
  width: 100%;
  height: 2.8125rem;
  margin-top: 1rem;
  background: #f12c4c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .3125rem;
  font-weight: 500;
  cursor: pointer;
`;

export const Mid = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 0;

  img {
    width: 0.9375rem;
  }

  button, div {
    border: solid 0.0625rem #323b45;
    padding: 0.3125rem;
    border-radius: 0.3125rem;
  }

  .left_class {
    display: flex;
    position: absolute;
    right: 0;
    margin-left: 5rem;
  }

  #leftS {
  }

  section {
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
    div {
      border: solid 0.0625rem #323b45;
      padding: 0.3125rem;
      border-radius: 0.3125rem;
    }
  }
`;

export const CardWrapper = styled.div`
  padding: 0;  
  width: 6rem; 
  height: 6rem;
  perspective: 1000px;
  margin: 0;  
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;  
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;

  background-attachment: scroll;
  background-blend-mode: normal;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);

  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  border-radius: .75rem;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(135.41deg, rgba(72, 76, 84, 0.3) 0.47%, rgba(35, 47, 57, 0.3) 99.56%);
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);

  border-radius: .75rem;
  padding: 19px;
  
  backface-visibility: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bomb-background {
  background-color: #E2254C; 
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

export const Retirar= styled(Comecar)`
 
`

export const InputStyled = styled.input`
font-size: 12px;
padding: 0.5rem;
border-radius: 4px;
`; 