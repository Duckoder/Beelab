import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productByCategory, setProductByCategory] = useState([]);

  // fetch product
  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios.get('https://fakestoreapi.com/products');
      setProducts(respone.data);
    };
    fetchProducts();
  }, []);

  //fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const respone = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(respone.data);
    };
    fetchCategories();
  }, []);

  //fetch by category
  const FetchProductByCategory = (category) => {
    useEffect(() => {
      const fetchProd = async () => {
        const respone = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        setProductByCategory(respone.data);
      };
      fetchProd();
    }, []);
  };

  const FindProductById = (id) => {
    useEffect(() => {
      const fetchProdById = async () => {
        const respone = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(respone.data);
      };
      fetchProdById();
    }, []);
  };

  return (
    <ApiContext.Provider
      value={{ product, products, categories, FetchProductByCategory, productByCategory, FindProductById }}
    >
      {children}
    </ApiContext.Provider>
  );
};
