import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section class="section about" id="about">
      <div class="container">
        <div class="about-banner">
          <h2 class="deco-title">О нас</h2>

          <img
            src="/images/deco-img.png"
            width="58"
            height="261"
            alt=""
            class="deco-img"
          />

          <div class="banner-row">
            <div class="banner-col">
              <img
                src="/images/berkut.jpg"
                width="315"
                height="380"
                loading="lazy"
                alt="Tiger"
                class="about-img w-100"
              />

              <img
                src="/images/bars.jpg"
                width="386"
                height="250"
                loading="lazy"
                alt="Panda"
                class="about-img about-img-2 w-100"
              />
            </div>

            <div class="banner-col">
              <img
                src="/images/arkar.jpg"
                width="250"
                height="277"
                loading="lazy"
                alt="Elephant"
                class="about-img about-img-3 w-100"
              />

              <img
                src="/images/about-banner-4.jpg"
                width="315"
                height="380"
                loading="lazy"
                alt="Deer"
                class="about-img w-100"
              />
            </div>
          </div>
        </div>

        <div class="about-content">
          <p class="section-subtitle">
            <img
              src="/images/subtitle-img-green.png"
              width="32"
              height="7"
              alt="Wavy line"
            />

            <span>Почему выбирают нас</span>
          </p>

          <h2 class="h2 section-title">
            Ресурсы не безграничны, <strong>будем же экономичнее!</strong>
          </h2>

          {/* <ul class="tab-nav">
            <li>
              <button class="tab-btn active">Наша миссия</button>
            </li>

            <li>
              <button class="tab-btn">Наше видение</button>
            </li>

            <li>
              <button class="tab-btn">Следующие планы</button>
            </li>
          </ul> */}

          <div class="tab-content">
            <p class="section-text">
              But I must explain to you how all this mistaken denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system expoundmaster
            </p>

            <ul class="tab-list">
              <li class="tab-item">
                <div class="item-icon">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>

                <p class="tab-text">Charity For Foods</p>
              </li>

              <li class="tab-item">
                <div class="item-icon">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>

                <p class="tab-text">Charity For Education</p>
              </li>

              <li class="tab-item">
                <div class="item-icon">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>

                <p class="tab-text">Charity For Water</p>
              </li>

              <li class="tab-item">
                <div class="item-icon">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>

                <p class="tab-text">Charity For Medical</p>
              </li>
            </ul>
            <Link to="/about">
              <button class="btn btn-secondary">
                <span>Узнать больше</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
