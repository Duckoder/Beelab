import Carousel from '~/components/Layout/components/Carousel';
import ItemCard from '~/components/Layout/components/ItemCard';
import { useContext } from 'react';
import { ApiContext } from '~/context/ApiContext';

function Home() {
  const { categories, products } = useContext(ApiContext);

  return (
    <div>
      <div className="container mx-auto">
        <Carousel />
        <div>
          <h3 className="flex font-semibold justify-center py-2 mt-2">Enjoy Your Youth!</h3>
          <div className="flex font-normal justify-center items-center text-center mb-2">
            Không chỉ là thời trang, BEELAB còn là “phòng thí nghiệm” của tuổi trẻ - nơi nghiên cứu và cho ra đời nguồn
            năng lượng mang tên “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng động và trẻ trung.
          </div>
        </div>
        <div>
          {categories.map((category) => {
            const filteredProduct = products.filter((item) => {
              return item.category === category;
            });
            return (
              <div>
                <div className="uppercase font-semibold text-sm py-4">{category}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 py-7">
                  {filteredProduct.map((prod) => {
                    return (
                      <ItemCard
                        key={prod.id}
                        productObj={prod}
                        productId={prod.id}
                        productCategory={prod.category}
                        productImage={prod.image}
                        productName={prod.title}
                        productPrice={prod.price}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
