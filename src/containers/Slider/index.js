import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
  // _________________________________________
    new Date(evtB.date) - new Date(evtA.date)
    // _______________________________________
  );
  const nextCard = () => {
    setTimeout(
      () => setIndex(index + 1 < byDateDesc?.length ? index + 1 : 0),
      //  ajout du ? byDateDesc pour verifier si byDateDesc existe et si index +1 est inférieur à la longueur de byDateDesc
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
    {/* suppression des <></> qui encapsulait 2 éléments différents ce qui créait des problèmes */}
      {byDateDesc?.map((event, idx) => (
        <div key={event.date}>
            
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={_.date}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  readOnly
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
