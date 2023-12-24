import axious from 'axios';

export async function getAllProduct() {
  try {
    const respone = await axious.get('https://fakestoreapi.com/products');
    return respone.data;
  } catch (error) {
    console.error('Error fetching data: ', error.message);
    throw error;
  }
}

export async function getSingleProduct(id) {
  try {
    const respone = await axious.get(`https://fakestoreapi.com/products/${id}`);
    return respone.data;
  } catch (error) {
    console.error('Error fetching data: ', error.message);
    throw error;
  }
}
