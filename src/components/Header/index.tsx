import { SetStateAction, useState, useRef } from "react";
import { HeaderStyle, SelectStyled, ButtonsPay, Level } from "./style.ts";
import { BiSolidUser } from "react-icons/bi";
import menu from "../../assets/menu.png";
import logoBlaze from "../../assets/logoBlaze.png";
import trofelIcon from "../../assets/trofelicon.svg";
import cassinoLogo from "../../assets/cartasLogo.png";
import basquetLogo from "../../assets/basketLogo.svg";
import LevelIcon from "../../assets/Component 12.svg";
import NotificationIcon from "../../assets/notification.png";
import NotifyIcon from "../../assets/Background+Border.png";
import dinheiroIcon from '../../assets/dinheiroIcon.svg'
import depositarIcon from '../../assets/depositarIcon.svg'
import sacarIcon from '../../assets/sacarIcon.svg'
import IndiqueIcon from '../../assets/indiqueIcon.svg'
import TransacaoIcon from '../../assets/transacaoicon.svg'
import HistoricoIcon from '../../assets/historicoIcon.svg'
import PreferenciasIcon from '../../assets/preferenciasIcon.svg'
import JusticaIcon from '../../assets/justicaIcon.svg'
import SuporteIcon from '../../assets/suporteIcon.svg'
import RecompensasIcon from '../../assets/reconpensasIcon.svg'
import SairIcon from '../../assets/sairIcon.svg'
import UserIcon from '../../assets/usericon.svg'
import SetaIcon from '../../assets/Symbol.png'
import CoroaIcon from '../../assets/bronze.160e3393.svg.png'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Box, Img, useDisclosure, ModalCloseButton, background } from "@chakra-ui/react";
import { AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from "@chakra-ui/icons";
import { useHeader } from "../../context/headerContext"

export function Header({ onQuantiaChange , switchSacar }: { onQuantiaChange: (value: number) => void }) {
  const { quantia, setQuantia } = useHeader()
  const [initialQuantia, setInitialQuantia] = useState(1);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const finalRef = useRef(null); 

  const formatValue = (value: number) => {
    return `R$ ${value.toFixed(2).replace(".", ",")}`;
  };

  const handleQuantiaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace("R$", "").replace(",", ".");
    const numericValue = Number.parseFloat(value);
    if (!Number.isNaN(numericValue)) {
      setInitialQuantia(numericValue);
      onQuantiaChange(numericValue); 
    }
  };

  const handleCheckboxChange = (position: string) => {
    setSelectedPositions((prevSelectedPositions) => {
      if (prevSelectedPositions.includes(position)) {
        return prevSelectedPositions.filter((pos) => pos !== position);
      }
        return [...prevSelectedPositions, position];
    });
  };

  return (
    <HeaderStyle>
      <nav className="flex items-center">
        <section className="flex gap-10">
          <img src={menu} alt="" className="cursor-pointer" />
          <img src={logoBlaze} alt="" />
          <img src={trofelIcon} alt="" />
        </section>

        <div className="flex mx-auto gap-[10rem]">
          <section className="flex gap-[5rem] items-center">
            <div className="flex flex-col">
              <button type="button" className="flex items-center font-semibold text-white">
                <img src={cassinoLogo} alt="" />
                cassino
              </button>
              <hr className="absolute w-[100px] mt-[2.7rem] border-t-2 border-red-500" id="hr_select" />
            </div>
            <button type="button" className="flex items-center font-semibold text-white">
              <img src={basquetLogo} alt="" />
              esportes
            </button>
          </section>

          <section className="flex items-center gap-[2rem]">
            <Level>
              <div style={{ display: "flex", 
                alignItems: "center", justifyContent: "center",
                gap: ".5rem"
                }}>
               <img 
                src={CoroaIcon}
                className="cursor-pointer"
                alt=""
                style={{ width: "15px", height: "15px"}}
               />
               <p style={{ color: "#C5A075" }}>Bronze</p>
               <p style={{ color: "#fff", fontFamily: "Roboto", fontSize: "14px", marginTop: "3px" }}>Nível29</p>
              </div>
              <div style={{ width: "80px", height: "4px", zIndex: "9999", background: "#C5A075", borderRadius: "5px" }}/>
              <div style={{ position: "absolute", width: "80px", height: "4px", borderRadius: "5px", 
                background: "#353e4c", marginLeft: "46px",
                marginTop: '24px'
                }}/>
            </Level>
            <div className="flex items-center">
              <img src={NotificationIcon} alt="" className="message_icon" />
              <img src={NotifyIcon} alt="" className="notify_icon" />
              
              <Menu placement="bottom"> 
                <MenuButton
                  style={{ border: "none", marginLeft:"10px"}}
                  as={IconButton}
                  aria-label="Options"
                  icon={<img src={"https://blaze.com/static/media/profile-icon.b5349171.svg"} alt="User" />}
                  variant="outline"
                  _hover={false}
                />
                <MenuList>
                  <MenuItem icon={<img src={UserIcon} alt=""/>} >
                    Conta
                  </MenuItem>
                  <MenuItem icon={<img src={dinheiroIcon} alt=""/>} >
                    Meu Saldo
                  </MenuItem>
                  <MenuItem icon={<img src={depositarIcon} alt=""/>} onClick={onOpen}>
                    Depositar
                  </MenuItem>
                  <MenuItem icon={<img src={sacarIcon} alt=""/>} onClick={switchSacar}>
                    Sacar
                  </MenuItem>
                  <MenuItem icon={<img src={IndiqueIcon} alt=""/>} >
                    Indique Um Amigo
                  </MenuItem>
                  <MenuItem icon={<img src={TransacaoIcon} alt=""/>} >
                    Transações
                  </MenuItem>
                  <MenuItem icon={<img src={HistoricoIcon} alt=""/>} >
                    Histórico
                  </MenuItem>
                  <MenuItem icon={<img src={PreferenciasIcon} alt=""/>} >
                    Preferências
                  </MenuItem>
                  <MenuItem icon={<img src={JusticaIcon} alt=""/>} >
                    Justiça
                  </MenuItem>
                  <MenuItem icon={<img src={SuporteIcon} alt=""/>} >
                    Suporte ao Vivo
                  </MenuItem>
                  <MenuItem icon={<img src={RecompensasIcon} alt=""/>} >
                    Recompensas
                  </MenuItem>
                  <hr />
                  <MenuItem icon={<img src={SairIcon} alt=""/>} >
                    Sair
                  </MenuItem>
                </MenuList>
              </Menu>

              <label className="label_quantia">
                <input
                  type="text"
                  // value={formatValue(initialQuantia)}
                  onChange={(e) => setQuantia(e.target.value)}
                  className="value_input"
                />
                <img src={SetaIcon} alt="" />
              </label>
            </div>
            <button type="button" className="button_deposito">Depositar</button>
          </section>
        </div>
      </nav>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ 
					background: "#1A242D",
					height: '30rem',
					fontSize: "1rem",
					backgroundColor: "#121e29"
					}} width={"20rem"}>
          <ModalHeader className="">
					 <p style={{ color: "#fff", fontSize: "12px"}}>
						Tipo De Pagamento
						<p style={{ display: 'block', marginBlockStart: "0.83em", marginBlockEnd: '0.83em', marginInlineStart: "0px", marginInlineEnd: '0px',unicodeBidi: "isolate"}}>
						 <span style={{borderTop:"4px solid #f12c4c"}}/>
						</p>
					 </p> 
					</ModalHeader>
					
					<ModalCloseButton color={"#fff"}/> 
          <ModalBody style={{ display: "flex", flexDirection: "column"}}>
            <p style={{ color: "#fff", textAlign: "center"}}>
						 Escolha o seu método de pagamento
						</p>
           <section>
						<ButtonsPay style={{
							display: "flex",
							justifyContent: "space-between",
							background: "#313A44",
						 }}>
						  <p style={{ color: "#fff", padding: '2px'}}>
							 Pix
						  </p>
						 <img 
						  src={"https://blaze.com/static/media/pix.a89a8cc5.svg"}
						  alt=""
							style={{ width: "1rem"}}
						 />
						</ButtonsPay>
					 </section>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Foco movido para este elemento após o fechamento do modal.
      </Box> */}
    </HeaderStyle>
  );
}
