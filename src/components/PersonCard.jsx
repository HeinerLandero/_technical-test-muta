import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";
import iconClose from '../images/cerrar-ventana.png';
import iconOpen from '../images/menu.png';
 
function CloseFullscreenSvg() {
  return (
    <>
        <img width="32" height="32" className="icon-button" src={iconClose}  alt="close"/>
    </>
  );
}
 
function OpenFullscreenSvg() {
  return (
    <>
        <img width="32" height="32" className="icon-button" src={iconOpen}  alt="open"/>
    </>
  );
}
 
export default function PersonCard(){
  const [isCardExpanded, setIsCardExpanded] = useState(false);
 
  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          width: isCardExpanded ? "40rem" : "17rem",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          padding: "2.35rem 0",
          color: isCardExpanded ? "white" : "currentColor",
          scrollbarWidth: 'none'
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{ position: "absolute", right: 0, zIndex: 9999, background : 'transparent', border:'none' }}
            onClick={() => setIsCardExpanded(!isCardExpanded)}
          >
            <figure >
              {isCardExpanded ? (
                <CloseFullscreenSvg />
              ) : (
                <OpenFullscreenSvg />
              )}
            </figure>
          </button>
        </div>
        <div >
          <img onClick={() => setIsCardExpanded(!isCardExpanded)}
            style={{
              width: isCardExpanded ? "24rem" : "17.5rem",
              height: "auto",
            }}
            alt="img.pokemon"
            // src={imgPerson}
          />
          {isCardExpanded && (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
                <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>
                    name.pokemon 
                </h4>
              <p>
                 info.pokemon
              </p>
            </section>
          )}
        </div>
      </div>
    </MagicCard>
  );
}