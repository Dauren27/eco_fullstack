import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section class="hero" id="home">
        <div class="container">
          <p class="section-subtitle">
            <img
              src="/images/subtitle-img-white.png"
              width="32"
              height="7"
              alt="Wavy line"
            />

            <span>Добро пожаловать Бишкек-Эко</span>
          </p>

          <h2 class="h1 hero-title">
            Бережём природу - <strong>бережём и родину свою</strong>
          </h2>

          <p class="hero-text">
            Sit amet consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua suspendisse ultrices
            gravida.
          </p>
          <Link to="/donate">
            <button class="btn btn-primary">
              <span>Донаты</span>

              <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
            </button>
          </Link>
        </div>
      </section>
      <section class="section features">
        <div class="container">
          <ul class="features-list">
            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Защита животных</h3>

                <p class="item-text">
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="water-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Безопасная вода</h3>

                <p class="item-text">
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="leaf-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Экологическая экономия</h3>

                <p class="item-text">
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="snow-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Экология</h3>

                <p class="item-text">
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;
