import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img className="home__image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />
        <Product
          id="12321342"
          title="Dash Stand Mixer (Electric Mixer for Everyday Use): 6 Speed Stand Mixer with 3 qt Stainless Steel Mixing Bowl, Dough Hooks & Mixer Beaters for Dressings"
          price={49.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/71oeZMxu3ML._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321343"
          title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch"
          price={35.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/51oAPLRW9DL._AC_UY218_.jpg"
        />
        <Product
          id="12321344"
          title="Certified Refurbished Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
          price={89.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61Gob-M3snL._AC_UY218_.jpg"
        />
        <Product
          id="12321345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={939.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
            id="12321346"
            title="Samsung CJ89 43 Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
            price={549.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY218_.jpg"
          />
      </div>
    </div>
  )
}

export default Home
