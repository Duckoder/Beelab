import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://fakestoreapi.com',
//   timeout: 5000,
//   headers: {

//   }
// });

export async function getAllProduct() {
  try {
    const respone = await axios.get('https://fakestoreapi.com/products');
    return respone.data;
  } catch (error) {
    console.error('Error fetching data: ', error.message);
    throw error;
  }
}

export async function getSingleProduct(id) {
  try {
    const respone = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return respone.data;
  } catch (error) {
    console.error('Error fetching data: ', error.message);
    throw error;
  }
}

export async function getAllCategories() {
  try {
    const respone = await axios.get('https://fakestoreapi.com/products/categories');
    return respone.data;
  } catch (error) {
    console.error('Error fetching data: ', error.message);
    throw error;
  }
}

export async function getProductByCategory(category) {
  try {
    const respone = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return respone.data;
  } catch (error) {
    console.log('Error fetching data: ', error.message);
    throw error;
  }
}
