import Carousel from '~/components/Layout/components/Carousel';
import ItemCard from '~/components/Layout/components/ItemCard';
import { useEffect, useState } from 'react';
import { getAllProduct, getAllCategory } from '~/service/ApiService';

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prods = await getAllProduct();
        const cate = await getAllCategory();
        setProducts(prods);
        setCategories(cate);
      } catch (error) {
        console.error('Error in component:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <Carousel />
        <div className="flex flex-col py-8 justify-center items-center">
          <h3 className="flex w-full font-semibold justify-center py-2 mt-2">Enjoy Your Youth!</h3>
          <div className="flex font-normal justify-center items-center text-center mb-2 w-[75%]">
            Không chỉ là thời trang, BEELAB còn là “phòng thí nghiệm” của tuổi trẻ - nơi nghiên cứu và cho ra đời nguồn
            năng lượng mang tên “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng động và trẻ trung.
          </div>
        </div>
        <div>
          {categories.map((category) => {
            const filteredProduct = products.filter((item) => {
              return item.category.name === category.name;
            });
            return (
              <div>
                {category.status === 1 && <div className="uppercase font-semibold text-sm py-4">{category.name}</div>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 py-7">
                  {filteredProduct.map((prod) => {
                    return (
                      prod.category.status === 1 && (
                        <ItemCard
                          key={prod.id}
                          productObj={prod}
                          productId={prod.id}
                          productCategory={prod.category.name}
                          productImage="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                          productName={prod.name}
                          productPrice={prod.amount}
                        />
                      )
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
