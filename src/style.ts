import styled from "styled-components";
import BackgroundImage from "./assets/Component 10.png";

export const Main = styled.main`
  margin: 0 auto;
  margin-top: 160px;
  align-items: center;
  display: flex;
  justify-content: center;
  height: calc(100vh - 30vh);
  /* width: 70%; */
  `;

export const ContentFirst = styled.div`
  border-radius: .3125rem;
  background-image: url("../assets/background-game.602c4786.svg") no-repeat center center;
  background-size: cover;
  
  width: 1440px;
  height: 536px;
  display: flex;
  color: #fff;
  margin: 0 auto;
  justify-content: center;
  /* background-color: rgba(26, 36, 45, 0.7); */
  /* margin-top: -46.4px; */

  .hr_feast {
    display: flex;
    width: .0625rem;
    height: 100%;
    background-color: #323b45;
    /* margin-left: 32px; */

  }
`;

export const Left = styled.section`
  border-radius: .3125rem;
  width: 400px;
  
  position: relative;
  display: flex;
  flex-direction: column; 
  background-color: #1a242db2;
  padding-left: 16px;
  padding-right: 16px;
  /* padding: 16px; */
`;

export const Right = styled.section`
  /* width: 667.2px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .3125rem;
  width: 675px;
  /* width: 100%; */
  padding-top: 9.6px;
  padding-left: 84.8px;
  background-image: url(${BackgroundImage}); 
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat; 
  background-color: #1a242db2;

  div {
    display: flex;
    flex-wrap: wrap;
    margin: 1.6px;
    gap: 0;
  }
`;

export const Internal = styled.section`
  margin-top: 16px;
  /* margin-left: 16px; */
  .first_label {
    width: 100%;
    display: flex;
    align-items: center;
    background: #0f1923;
    padding-right: 1.25rem;
    border-radius: .3125rem;
    color: #fff;
  }

  .first_button, .second_button {
    height: 40px;
    width: 56px;
    background: none;
    border: solid .0625rem #323b45;
    margin-left: 1px;
    border-radius: 5px;
  }

  .second_label {
    display: flex;
    flex-direction: column;
    color: #6d7b95;
    margin-top: 6.4px;
    font-weight: 500;
    font-size: 12px;
    input {
      margin-top: 1px;
    }
  }
  
  p {
    font-weight: 500;
  }

  input:nth-child(1) {
    background: #0f1923;
    width: 216px;
    height: 40px;
    border-radius: 5px;
    outline: none;
    color: #fff;
  }

  .ValoresGanhados {
    display: flex;
    width: 100px;
    margin-top: 8px;
    gap: 16px;
    label {
     display: flex;
     flex-direction: column;
     color: #6d7b95;
     font-weight: 500;
     font-size: 12px;
     input {
      margin-top: 1px;
      background: #0f1923;
      width: 216px;
      height: 40px;
      border-radius: 5px;
      outline: none;
      color: #fff;
     }
    }
  }

  ::placeholder {
    margin-top: -20px;
    font-size: 11px;
  }

  &:focus {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
  }
`;

export const SelectStyled = styled.select`
  background: #0F1923;
  width: 100%;
  height: auto;
  /* border: 2px solid #323b45; */
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  outline: none;
  background-image: url('https://blaze.com/static/media/arrow-down-select.abbfcd40.svg');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px 20px;

  option {
    color: #323b45;
  }

  &:focus {
    border-color: #555;
  }
`;

export const Comecar = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 16px;
  background: #f12c4c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
`;

export const Mid = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  padding: 16px 0;

  img {
    width: 15px;
  }

  button, div {
    border: solid 1px #323b45;
    padding: 5px;
    border-radius: 5px;
  }

  section {
    display: flex;
    gap: 16px;
    justify-content: space-between;

    div {
      border: solid 1px #323b45;
      padding: 5px;
      border-radius: 5px;
    }
  }
  
  .left_class {
    display: flex;
    position: absolute;
    right: 0;
    margin-left: 80px;
  }

  #leftS {
  }

`;

export const CardWrapper = styled.div`
  padding: 0;  
  width: 100px; 
  height: 100px;
  perspective: 62.5rem;
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
  border-radius: 12px;
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

  border-radius: 12px;
  padding: 1.1875rem;
  
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

export const Retirar = styled(Comecar)``;

export const InputStyled = styled.input`
font-size: .75rem;
padding: .5rem;
border-radius: .25rem;
`;

export const ModalStyle = styled.section`
  position: absolute;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: 10.75rem;
  /* margin: 0 auto; */
  height: 6.375rem;
  background-color: #04D57C;
  border-radius: 5px;
  /* padding: 1.25rem; */
  color: #fff;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div:nth-child(1) {
    margin-bottom: 12px;
  }

  div:nth-child(2) {
    width: 100%;
    background-color: #01B164;
    position: absolute;
    bottom: 0;
    margin-top: 2px;
  }
  
  h3 {
    margin: 0 auto;
    font-size: 15px;
    font-weight: bold;
    text-align: center;

  }
  `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
 .firstLabel,.label_saldo {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.75rem;
  /* align-items: center; */
  gap: 0.25rem;
  border-radius: 0.25rem;
  /* border: .0625rem solid #E6E5E5; */
  background: #232C35;
  font-family: sans-serif;

  input {
   flex: 1 0 0;
   color: #8D8686;
   background: none;
   border: none;
   font-family: 'Roboto';
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }
  }

 section {
  display: flex;
  width: 100%;
  padding: 0.75rem;
  gap: 2rem;
  border-radius: 0.25rem;
  font-family: sans-serif;
  

  label:nth-child(1) {
    position: reltive;
    img {
      margin-left: -27px;
      /* padding: 10px */
    }
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  
  /* align-items: center; */
  gap: 0.25rem;
  border-radius: 0.25rem;
  /* border: .0625rem solid #E6E5E5; */
  background: #232C35;
  font-family: sans-serif;
  }
  label:nth-child(2) {
    img {
      margin-left: -27px;
      /* padding: 10px */
    }
    display: flex;
  /* flex-direction: column; */
  width: 100%;
  
  /* align-items: center; */
  gap: 0.25rem;
  border-radius: 0.25rem;
  /* border: .0625rem solid #E6E5E5; */
  background: #232C35;
  font-family: sans-serif;
  }

  input {
    margin-left: -11px;
    border-radius: 0.25rem;
    padding: 0.75rem;
    background: #232C35;
    /* width: 200px; */
    flex: 1 0 0;
    color: #8D8686;
    /* background: none; */
    border: none;
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
   }
  }
  
  #section_button {
   margin-top: 3.6rem;
  }

  
  label {
  display: flex;
  align-items: center;
  gap: .625rem; 
  outline: 0;
  width: 100%;
}

label input {
  width: 100%;
  outline: 0;
}

label img {
  width: 20px; 
  height: 1.25rem; 
  object-fit: contain; 
}
  #button_voltar {
   margin-left: -.625rem;
   width: 100%;
   border-radius: 5px;
   border: solid 1px #212B33;
   padding: .625rem;
  }

  #button_sacar {
   margin-left: 10px;
   width: 100%;
   border-radius: 5px;
   background: #F12C4C;
   padding: 10px;
  }

  `;

export const ModalStyleSacar = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: .75rem;
  padding: 1.25rem;
  flex-direction: column;
  border-radius: .3125rem;
  background-color: #17212A;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 28.125rem;
  height: 43.75rem;
  z-index: 9999; 

  div:nth-child(1) {
    display: flex;
    gap: .7rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    align-items: center;
  }
`;

export const ModalStyleRetirada = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: .75rem;
  padding: 1.25rem;
  flex-direction: column;
  border-radius: 5px;
  background-color: #17212A;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 28.125rem;
  height: 43.75rem;
  z-index: 9999; 

  .CloseIcon {
    width: 3.125rem;
    height: 1.875rem;
    position: absolute;
    margin-top: .1875rem;
    right: 0;
    top: 0;
  }
  
  .button_pix {
    display: flex;
    justify-content: space-between;
    background-color: #202932;
    &:hover {
     transition: 100ms all;
     background-color: #0F1923;
    }
    border: solid .0625rem #323b45;
    padding: 8px;
    border-radius: .3125rem;
    align-items: center;
    font-size: 12px;
    font-family: sans-serif;
  }

  .label_recomendado {
    display: flex;
    flex-direction: column;
  }

  .label_outrosmetodos {
    display: flex;
    flex-direction: column;
    gap: .6rem;
  }

  .text-recomendado {
    color: #6d7b95;
    font-weight: 600;
    font-size: 12px;
  }

  .class_title {
    text-align: center;
    margin-top: .6rem;
    margin-bottom: .5rem;
    font-weight: 600;
  }

  div:nth-child(1) {
    display: flex;
    margin: 0 auto;
    /* justify-content: space-evenly; */
    gap: .7rem;
    /* margin: 0 auto; */
    /* margin-bottom: 1rem; */
    align-items: center;
    /* width: 100%; */
  }
`;

export const Section = styled.div`
  cursor: pointer;
  width: 3px;
  height: 3px;
  border-top: .5px solid transparent;
  border-bottom: .5px solid transparent;
  border-left: 5px solid #F12C4C;
`;
