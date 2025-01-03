import { ToastStyle } from './style';
import CheckSucess from '../../assets/17766985.png';
import { IoIosClose } from "react-icons/io";

export function Toast({ handleSwitchToast }) {
  return (
    <ToastStyle>
      <section style={{ width: "100%" }}>
        <img src={CheckSucess} alt="Sucesso" />
        <hr className='hr_style' />
        <p>Saque colocado na fila com êxito. Você<br />receberá uma notificação quando ele<br />
          for concluído.</p>
        <button type='button' onClick={() => handleSwitchToast()}>
          <IoIosClose className='CloseIcon' />
        </button>
      </section>
      <section />
    </ToastStyle>
  );
}