import { Box, Typography, styled } from "@mui/material";

// type Props = {}

import fiberImage from "./images/fiber.jpg";

const FiberBox = styled(Box)({
  // backgroundImage: `url(${fiberImage})`,
  // width: "100%",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover",
  // height: 500,
  // position: "relative"
});

const OuterBox = styled(Box) ({
  // position: "absolute",
  overflow: "hidden",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
})
const InnerBox = styled(Box) ({
  backgroundImage: `url(${fiberImage})`,
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: 350,
  // position: "relative"
})

const HistoryBox = styled(Box)({
  margin: "10px 150px",
  padding: "30px 20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 20,
  // textAlign: "center",
  // maxWidth: "700px",
  // backgroundColor: "#F7FBFC",
});

const fontSize = 20;

const PlainText = styled(Typography)({
  // fontWeight: "700"
  fontSize: fontSize,
});

const HeadingText = styled(Typography)({
  fontWeight: 700,
  fontSize: fontSize,
});

const History = () => {
  return (
    <div>
      <FiberBox>{/* <img src={fiberImage} alt="" /> */}</FiberBox>
      <OuterBox>
        <InnerBox></InnerBox>
      </OuterBox>

      {/* <BackgroundImage /> */}
      <HistoryBox>
        <PlainText>
          Група компаній <b>Triangulum</b> надає послуги телефонного зв’язку і
          Інтернет під торговою маркою <b>Triacom</b>. У 2012 році група
          компаній Triangulum придбала мережу оператора City Net, що веде свою
          історію з 1998 року. З того часу група компаній закріпила за собою
          статус надійного партнера і постачальника високоякісних послуг на
          території міста Києва та Київської області.
        </PlainText>
        <PlainText>
          Вузол Triacom є складовою частиною Телефонної мережі загального
          користування України, інтегрований з мобільними операторами GSM/3G і
          найбільшими операторами послуг фіксованого зв’язку. Якісні послуги
          Інтернет надаються завдяки інтеграції в український центр обміну
          трафіком і прямому приєднанню до міжнародних операторів. Магістральна
          мережа зв’язку застосовує високошвидкісні оптичні технології, що
          дозволяє гарантувати якісний рівень послуг і конкурентоспроможні ціни.
        </PlainText>
        <PlainText>
          З 2012 року група компаній Triangulum розширила телекомунікаційну
          мережу до більш ніж 4 000 км волоконно-оптичних ліній зв’язку та понад
          50 технічних майданчиків по м.Києву та Київській області.
        </PlainText>
        <PlainText>
          Головним пріоритетом групи компаній є задоволення користувачів і
          ексклюзивні умови обслуговування ключових клієнтів.
        </PlainText>
        <PlainText></PlainText>
        <PlainText>Структура групи компаній Triangulum:</PlainText>
        <PlainText>
          <b>
            Товариство з обмежено відповідальністю «Т.Е.С.Т.” (код ЄДРПОУ
            32667140)
          </b>{" "}
          внесено до Реєстру постачальників електронних комунікаційних мереж та
          послуг Національної комісії, що здійснює державне регулювання у сферах
          електронних комунікацій, радіочастотного спектра та надання послуг
          поштового зв’язку за № 2199. Дозвіл на використання номерного ресурсу
          НР 100785. Комплексна система захисту інформаційно-телекомунікаційної
          системи захищеного вузлу Інтернет-доступу Товариства відповідає
          вимогам нормативних документів у сфері технічного захисту інформації в
          Україні, що підтверджується Атестатом відповідності зареєстрованим в
          Державній службі спеціального зв’язку та захисту інформації за № 19310
          від 04.06.2019р.
        </PlainText>
        <PlainText>
          <b>
            Товариство з обмеженою відповідальністю “Глобальні Комунікації” (код
            ЄДРПОУ 38049812)
          </b>{" "}
          внесено до Реєстру постачальників електронних комунікаційних мереж та
          послуг Національної комісії, що здійснює державне регулювання у сферах
          електронних комунікацій, радіочастотного спектра та надання послуг
          поштового зв’язку за № 2215.
        </PlainText>
      </HistoryBox>
    </div>
  );
};

export default History;
