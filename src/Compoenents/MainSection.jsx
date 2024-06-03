import React from "react";
import { ProductCard } from "./ProductCard";
import ProductSlider from "./ProductSlider";

const MainSection = () => {
  return (
    <div id="container">
      <div className="product-gallery">
        <ProductCard
          title="Buy Heavy Watches"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
          offer="Shop Now"
        />
        <ProductCard
          title="Buy Heavy Shoes"
          img="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/26456552-3c45-469f-b47e-613cf03f0e59/women-s-air-jordan-4-oil-green-aq9129-103-release-date.jpg"
          offer="Shop Now"
        />
        <ProductCard
          title="Buy Heavy PS5"
          img="https://media.wired.com/photos/5f7e58deea83d42b022069b7/master/pass/Gear-PS5_RENDER_WITHNOTICE_01.jpg"
          offer="Shop Now"
        />
        <ProductCard
          title="Buy Heavy Laptop"
          img="https://i.pcmag.com/imagery/reviews/03Dv7AVBq4Rz218ePcc1fqB-1.fit_lim.size_840x473.v1655816447.jpg"
          offer="Shop Now"
        />
      </div>
      <ProductSlider />
    </div>
  );
};

export default MainSection;
