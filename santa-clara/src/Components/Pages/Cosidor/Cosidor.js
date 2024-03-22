import React from "react";
import "./Cosidor.css";
import { useTranslation } from "react-i18next";
import culture from "../../../Fcimages/culture.avif";
import learning from "../../../Fcimages/sewing.webp";

function Cosidor() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="cosidor section__padding">
        <div className="cosidor-container">
          <div className="cosidor__content text__center">
            <div className="cosidor-header">
              <h1 className="cosidor-section__title text__cap">
                {t("cosidor-page-title")}
              </h1>
            </div>
            <p className="cosidor__text text__grey">
              {t("cosidor-page-intro")}
            </p>
          </div>
        </div>
      </div>
      <div className="cosidor-card-container">
        <div class="cosidor-card">
          <img className="pic-cosidor" src={culture} />
          <div class="cosidor-card-body">
            <h5 class="cosidor-card-title">{t("cosidor-card1-title")}</h5>
            <p class="cosidor-card-text">{t("cosidor-card1-para")}</p>
          </div>
        </div>
        <div class="cosidor-card">
          <img className="pic-cosidor" src={learning} />
          <div class="cosidor-card-body">
            <h5 class="cosidor-card-title">{t("cosidor-card2-title")}</h5>
            <p class="cosidor-card-text">{t("cosidor-card2-para")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cosidor;
