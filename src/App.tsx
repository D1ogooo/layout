import { type SetStateAction, useState } from "react";
import { Header } from "./components/Header";
import {
  ContentFirst,
  Main,
  Left,
  Right,
  Internal,
  SelectStyled,
  Comecar,
  Mid,
  CardWrapper,
  Card,
  CardFront,
  CardBack,
  Retirar,
  ModalStyle,
  ModalStyleSacar,
  Form,
  Section,
  ModalStyleRetirada,
} from "./style";
import { ImVolumeHigh } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import AlertIcon from "./assets/alerticon.svg";
import StartIcon from "./assets/startIcon.svg";
import GraficIcon from "./assets/grafic.svg";
import BombImage from "./assets/bomb.fd702b50.svg";
import DiamondImage from "./assets/diamond.eac6e969.svg";
import BackgroundImage from "./assets/background-game.602c4786.svg";
import CompacIcon from './assets/compact.svg'
import { useDisclosure } from "@chakra-ui/react";
import { useHeader } from "./context/headerContext";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";

function App() {
  const [value, setValueOption] = useState<string>("2");
  const [flippedCards, setFlippedCards] = useState<object>({});
  const [init, setInit] = useState<boolean>(false);
  const [modalCongratulations, setModalCongratulations] = useState<boolean>(false);
  const [modalSacar, setModalSacar] = useState<boolean>(false);
  const [modalRetidada, setModalRetidada] = useState<boolean>(false);
  const { quantia, setQuantia } = useHeader();

  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // const [quantia, setQuantia] = useState<number>(1);

  // const [initialQuantia, setInitialQuantia] = useState<number>(1);

  const [currentMultiplier, setCurrentMultiplier] = useState<number>(1);
  const [nextMultiplier, setNextMultiplier] = useState<number>(4.667);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleCardClick(index: number) {
    if (gameOver) return;

    const isDiamond = selectedPositions.includes(`pos${index + 1}`);

    setFlippedCards((prev) => ({
      ...prev,
      [index]: true,
    }));

    if (isDiamond) {
      setModalCongratulations(true)
      setTimeout(() => {
        setModalCongratulations(false)
      }, 2000)
      setQuantia((prevQuantia) => prevQuantia + 0.112);
      setCurrentMultiplier((prevMultiplier) => prevMultiplier * 4.667);
      setNextMultiplier(currentMultiplier * 4.667);
    } else {
      setFlippedCards((prev) => {
        const allCardsFlipped = {};
        for (let i = 0; i < 25; i++) {
          allCardsFlipped[i] = true;
        }
        return allCardsFlipped;
      });
      setGameOver(true);
    }
  }

  const handleCheckboxChange = (position: string) => {
    setSelectedPositions((prevSelectedPositions) => {
      if (prevSelectedPositions.includes(position)) {
        return prevSelectedPositions.filter((pos) => pos !== position);
      }
      return [...prevSelectedPositions, position];
    });
  };

  function handleSelectBomb() {
    onOpen();
  }

  function handleInit() {
    setInit(true);
    setQuantia(quantia);
  }
  
  function handleClickPix(e) {
    e.preventDefault();
    setTimeout(() => {
      setModalSacar(!modalSacar);
    }, 1000);
  }
  
  function switchSacar(e) {
    e.preventDefault()
    setModalRetidada(!modalRetidada)
  }

  function handleRetirar() {
    setInit(false)
    setModalCongratulations(true);
    setTimeout(() => {
      setModalCongratulations(false);
    }, 2000);
  }

  const renderCards = () => {
    return Array.from({ length: 25 }, (_, index) => {
      const isDiamond = selectedPositions.includes(`pos${index + 1}`);
      const isFlipped = flippedCards[index];

      return (
        <CardWrapper key={index}>
          <Card
            className={isFlipped ? "flipped" : ""}
            onClick={() => handleCardClick(index)}
          >
            <CardFront>
              <div />
            </CardFront>
            <CardBack
              style={{
                backgroundColor: isDiamond ? "transparent" : "#E2254C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={isDiamond ? DiamondImage : BombImage}
                alt={isDiamond ? "Diamante" : "Bomba"}
                style={{ width: "100%", height: "100%" }}
              />
            </CardBack>
          </Card>
        </CardWrapper>
      );
    });
  };

  return (
    <>
      <Header switchSacar={switchSacar}/>
      <Main>
        <ContentFirst>
          <Left>
            <Internal>
              <div className="flex mb-4">
                <label className="first_label">
                  <input
                    type="text"
                    placeholder="Quantia"
                    className="pl-[.5rem]"
                    value={quantia}
                    readOnly
                  />
                  <p className="">R$</p>
                </label>
                <button type="button" className="first_button">
                  ½
                </button>
                <button type="button" className="second_button">
                  2x
                </button>
              </div>
              {!init ? (
                <div>
                  {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                  <label className="second_label">
                    Número de minas
                    <SelectStyled
                      value={value}
                      onChange={(e: {
                        target: { value: SetStateAction<string> };
                      }) => setValueOption(e.target.value)}
                    >
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                    </SelectStyled>
                  </label>

                  <Comecar type="button" onClick={() => handleInit()}>
                    Começar
                  </Comecar>
                </div>
              ) : (
                <>
                  <label className="second_label">
                    Multiplicador atual
                    <input
                      type="text"
                      value={currentMultiplier.toFixed(3)}
                      style={{ width: "100%", paddingLeft: "10px" }}
                      readOnly
                    />
                  </label>
                  <label className="second_label">
                    Próximo multiplicador
                    <input
                      type="text"
                      value={nextMultiplier.toFixed(3)}
                      style={{ width: "100%", paddingLeft: "10px" }}
                      readOnly
                    />
                  </label>

                  <div className="ValoresGanhados">
                    <label className="">
                      <p className="">Minas</p>
                      <input
                        type="text"
                        value={25 - selectedPositions.length}
                        readOnly
                        style={{
                          fontSize: "12px",
                          padding: "0.5rem",
                          borderRadius: "4px",
                          width: "176px",
                        }}
                      />
                    </label>
                    <label className="">
                      <p className="">Diamantes</p>
                      <input
                        type="text"
                        value={selectedPositions.length}
                        readOnly
                        style={{
                          fontSize: "12px",
                          padding: "0.5rem",
                          borderRadius: "4px",
                          width: "176px",
                        }}
                      />
                    </label>
                  </div>

                  <Retirar type="button" onClick={() => handleRetirar()}>
                    Retirar {(Number(quantia) + 0.112).toFixed(2)} BRL
                  </Retirar>
                </>
              )}
            </Internal>
            <Mid>
              <section>
                <div>
                  <img
                    src={CompacIcon}
                    alt="Alert"
                    style={{ cursor: "pointer", color: "#ACB1CD" }}
                  />
                </div>

                <div style={{ marginLeft: "120px" }}>
                  <img
                    src={AlertIcon}
                    alt="Alert"
                    style={{ cursor: "pointer", color: "#ACB1CD" }}
                  />
                </div>

                <div className="">
                  <img
                    src={StartIcon}
                    alt="Start"
                    style={{ cursor: "pointer", color: "#ACB1CD" }}
                  />
                </div>

                <div>
                  <ImVolumeHigh
                    style={{ cursor: "pointer", color: "#ACB1CD" }}
                  />
                </div>

                <button type="button" onClick={handleSelectBomb}>
                  <FaHistory style={{ cursor: "pointer", color: "#ACB1CD" }} />
                </button>

                <div>
                  <img
                    src={GraficIcon}
                    alt="Graphics"
                    style={{ cursor: "pointer", color: "#ACB1CD" }}
                  />
                </div>

              </section>
            </Mid>
          </Left>

          <hr className="hr_feast" />

          <Right>
            {modalCongratulations && (
              <ModalStyle>
                <div>
                  <h3>x{currentMultiplier.toFixed(3)}</h3>
                </div>
                <div>
                  <h3>YOU WON $</h3>
                </div>
              </ModalStyle>
            )}

            {modalRetidada && (
              <ModalStyleRetirada>
                <div className="">
                  <p>Tipo De Retirada</p>
                  <Section />
                  <p>Detalhes Da Retirada</p>
                  <button type="button" onClick={() => setModalRetidada(!modalRetidada)}>
                    <IoIosClose className="CloseIcon" />
                  </button>
                </div>
                <h2 className="class_title">Escolha o seu método de retirada</h2>
                <section>
                  <p className="text-recomendado">Recomendado</p>
                  {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                  <label className="label_recomendado">
                    <button
                     type="button"
                     className="button_pix"
                     onClick={handleClickPix
                    }
                    >
                      Pix 2
                    <img
                      src={"https://blaze.com/static/media/pix.a89a8cc5.svg"}
                      alt=""
                      style={{ width: "1rem", marginRight: "1.5rem" }}
                    />
                    </button>
                  </label>
                  <p className="text-recomendado" style={{ marginTop: ".3rem", marginBottom: ".1rem"}}>Outros métodos</p>
                  {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                  <label className="label_outrosmetodos">
                    <button type="button" className="button_pix">
                      Pix
                    <img
                      src={"https://blaze.com/static/media/pix.a89a8cc5.svg"}
                      alt=""
                      style={{ width: "1rem", marginRight: "1.5rem" }}
                    />
                    </button>
                    <button type="button" className="button_pix">
                      Pix
                    <img
                      src={"https://blaze.com/static/media/pix.a89a8cc5.svg"}
                      alt=""
                      style={{ width: "1rem", marginRight: "1.5rem" }}
                    />
                    </button>
                    <button type="button" className="button_pix">
                      Pix
                    <img
                      src={"https://blaze.com/static/media/pix.a89a8cc5.svg"}
                      alt=""
                      style={{ width: "1rem", marginRight: "1.5rem" }}
                    />
                    </button>
                    <button type="button" className="button_pix">
                      Pix
                    <img
                      src={"https://blaze.com/static/media/pix.a89a8cc5.svg"}
                      alt=""
                      style={{ width: "1rem", marginRight: "1.5rem" }}
                    />
                    </button>
                    <button type="button" className="button_pix">
                      Vpag
                    </button>
                  </label>
                </section>
              </ModalStyleRetirada>
            )}

            {modalSacar && (
              <ModalStyleSacar>
                <div className="">
                  <p>Tipo De Retirada</p>
                  <Section />
                  <p>Detalhes Da Retirada</p>
                </div>
                <h2 style={{ fontFamily: "sans-serif", textAlign: "center" }}>Insira as informações de Pix</h2>
                <p style={{ marginBottom: ".5rem" }}>Antes de fazer um saque Pix, certifique-se de ter registrado seu CPF
                  como chave Pix no seu aplicativo bancário.
                </p>
                <p>1.Abra o aplicativo bancário</p>
                <p>2.Vá para a seção Pix do aplicativo bancário</p>
                <p>3.Selecione "Minhas Chaves"</p>
                <p>4.Selecione a opção "Registrar Chave", e registre seu CPF</p>
                <p style={{ marginBottom: ".5rem" }}>5.Assim que seu banco confirmar que a chave está<br />registrada, você poderá receber saques via Pix</p>
                <h3 style={{ marginBottom: ".5rem" }}>Para uma guia mais detalhada sobre como registrar uma chave Pix, clique aqui.</h3>
                <Form>
                  <label className="firstLabel">
                    <input type="text" placeholder="CPF" />
                  </label>
                  <section>
                    <label>
                      <input type="text" placeholder="Dados..." />
                      <img src="https://blaze.com/static/media/locked.72b6d20a.svg" alt="" />
                    </label>
                    <label>
                      <input type="text" placeholder="Dados..." />
                      <img src="https://blaze.com/static/media/locked.72b6d20a.svg" alt="" />
                    </label>
                  </section>
                  <div className="flex flex-col">
                    <p>SALDO DIPONIVEL: R$0.00</p>
                    <label className="label_saldo" style={{ marginTop: ".1875rem" }}>
                      <input type="text" placeholder="Quantia (BRL)" />
                    </label>
                  </div>
                  {/* <ModalCloseButton /> */}
                  <section id="section_button">
                    <button type="button" id="button_voltar">Voltar</button>
                    <button type="button" id="button_sacar">SACAR</button>
                  </section>
                </Form>
              </ModalStyleSacar>
            )}
            <div>{renderCards()}</div>
          </Right>
        </ContentFirst>
      </Main>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selecione os Diamantes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              {Array.from({ length: 25 }, (_, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`pos${index + 1}`}
                    name={`pos${index + 1}`}
                    checked={selectedPositions.includes(`pos${index + 1}`)}
                    onChange={() => handleCheckboxChange(`pos${index + 1}`)}
                  />
                  <label htmlFor={`pos${index + 1}`}>Posição {index + 1}</label>
                </div>
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
