import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hr from "../../components/designLayouts/Hr";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";

export default function ProductDetails() {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(location.state.item);
  }, [location, productInfo.ficheTech]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300 mt-12">
      <div className="max-w-container mx-auto px-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full "
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
        <Hr />
        <div>
          <div className=" space-x-4  ">
            <button className="bg-gold font-semibold py-2 px-4 text-gray-800 focus:outline-none">
              Product Description
            </button>
          </div>

          <div className="my-4">
            <p>{productInfo.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
