import { SetStateAction, useState } from "react";
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
} from "./style";
import { ImVolumeHigh } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import AlertIcon from "./assets/alerticon.svg";
import StartIcon from "./assets/startIcon.svg";
import GraficIcon from "./assets/grafic.svg";
import BombImage from "./assets/bomb.fd702b50.svg";
import DiamondImage from "./assets/diamond.eac6e969.svg";
import BackgroundImage from "./assets/background-game.602c4786.svg";
import { useDisclosure } from "@chakra-ui/react";
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
  const [value, setValueOption] = useState("2");
  const [flippedCards, setFlippedCards] = useState({});
  const [init, setInit] = useState(false);

  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const [quantia, setQuantia] = useState(1);  // Valor inicial de quantia

  const [initialQuantia, setInitialQuantia] = useState(1); // O valor inicial que você quer manter

  const [currentMultiplier, setCurrentMultiplier] = useState(1);
  const [nextMultiplier, setNextMultiplier] = useState(4.667);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCardClick = (index: number) => {
    if (gameOver) return;

    const isDiamond = selectedPositions.includes(`pos${index + 1}`);

    setFlippedCards((prev) => ({
      ...prev,
      [index]: true,
    }));

    if (isDiamond) {
      setQuantia((prevQuantia) => prevQuantia + 0.112);  // Atualiza a quantia apenas se for diamante

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
  };

  const handleCheckboxChange = (position: string) => {
    setSelectedPositions((prevSelectedPositions) => {
      if (prevSelectedPositions.includes(position)) {
        return prevSelectedPositions.filter((pos) => pos !== position);
      } else {
        return [...prevSelectedPositions, position];
      }
    });
  };

  function handleSelectBomb() {
    onOpen();
  }

  function handleInit() {
    setInit(true);
    // Não altere o valor de quantia aqui, use o valor de initialQuantia
    setQuantia(initialQuantia);
  }

  function handleRetirar() {}

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
      <Header />
      <Main>
        <ContentFirst>
          <Left>
            <Internal>
              <div className="flex mb-4">
                <label className="first_label">
                  <input
                    type="text"
                    placeholder="Quantia"
                    className="pl-[1rem]"
                    value={quantia.toFixed(3)} // Exibe a quantia atual
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
                  <label className="second_label">
                    Número de minas
                    <SelectStyled
                      value={value}
                      onChange={(e: { target: { value: SetStateAction<string> } }) =>
                        setValueOption(e.target.value)
                      }
                    >
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
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
                          width: "160px",
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
                          width: "160px",
                        }}
                      />
                    </label>
                  </div>

                  <Retirar type="button" onClick={() => handleRetirar()}>
                    Retirar {quantia.toFixed(1)} BRL
                  </Retirar>
                </>
              )}
            </Internal>
            <Mid>
              <section>
                <div>
                  <img
                    src={AlertIcon}
                    alt="Alert"
                    style={{ cursor: "pointer", color: "#ACB1CD" }}
                  />
                </div>
                <div className="ml-[8rem]">
                  <img
                    src={StartIcon}
                    alt="Start"
                    style={{ cursor: "pointer", color: "#ACB1CD" }}
                  />
                </div>
                <div>
                  <ImVolumeHigh style={{ cursor: "pointer", color: "#ACB1CD" }} />
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

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
