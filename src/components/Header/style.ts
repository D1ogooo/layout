import styled from 'styled-components'

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: #323B45 solid 1px;
  z-index: 1000;
  background-color: #0F1923; 
  

  .message_icon {
    cursor: pointer;
  }
  
  .notify_icon {
    margin-left: .5625rem;
    position: absolute;
    margin-top: -.3125rem;
  }

  .button_saldo {
    background: none;
  }

  .button_deposito {
   width: 90px;
   border-radius: 5px;
   color: #fff;
   font-weight: 500;
   height: 30px;
   background: #F12C4C;
   padding: 2px;
   font-size: 12px;
  }

  #hr_select {
    background:red ;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    padding: 0 1rem;
    gap: 2rem; 
    padding-bottom: .7rem;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;

    nav {
      gap: 3rem;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 3rem;

    nav {
      gap: 4rem; 
    }
  }

  @media (min-width: 1440px) {
    margin-top: 1rem;

    nav {
      gap: 5rem; 
    }
  }

  

  .value_input { 
    width: 80px;
    height: 29px;
    border-radius: 4px;
    background: none;
    border: solid 1px #323B44;
    margin-left: 1rem;
    padding-left: 10px;
    color: #fff;
    font-size: 13px;
    outline: none;
  }
  
`

export const ButtonsPay = styled.button`
	display: "flex";
	justify-content: "space-between";
	background: "#313A44";
 p {
  /* display: flex;
  /* justify-content: space-between; */
  align-items: center;
  color: #fff;
  padding: 5px;
  font-size: 12px;
  width: 100%;
  height: 40px; */
 }
`

export const SelectStyled = styled.select`
  background: none;
  margin: 1rem;
  border: 2px solid #323B45;
  border-radius: 10px;
  padding: 10px;
  color: #323B45;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  outline: none;
  
  background-image: url('data:image/svg+xml,%3Csvg%20width%3D"10"%20height%3D"6"%20viewBox%3D"0%200%2010%206"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%3E%3Cpath%20d%3D"M0%200L5%206L10%200Z"%20fill%3D"%23323B45"%20%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px 6px; 

  option {
    color: #323B45;
  }

  &:focus {
    border-color: #555;
  }
`;
