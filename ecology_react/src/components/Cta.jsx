import React from "react";

const Cta = () => {
  return (
    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="h2 section-title">
            Множество партнёров по всему Кыргызстану
          </h2>
          <button class="btn btn-outline">
            <span>Стать партнёром</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
        <figure class="cta-banner">
          <img
            src="/images/flag2.jpg"
            width="520"
            height="228"
            loading="lazy"
            alt="Fox"
            class="img-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default Cta;
