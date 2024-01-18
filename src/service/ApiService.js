import axios from 'axios';

const callApi = async (method, endpoint, data = null, API_BASE_URL = 'http://localhost:8080') => {
  const url = `${API_BASE_URL}/${endpoint}`;

  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    console.error('API Error: ', error);
    throw error;
  }
};

//ProductService
//All Products
const getAllProduct = async () => {
  try {
    const result = await callApi('GET', 'products');
    return result.data;
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    throw error;
  }
};

//Find product by id
const getProductById = async (id) => {
  try {
    const result = await callApi('GET', `products/${id}`);
    return result;
  } catch (error) {
    console.error('Error in getProductById:', error);
    throw error;
  }
};

const addNewProduct = async (data) => {
  try {
    const result = await callApi('POST', 'products', data);
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error in addNewProduct:', error);
    throw error;
  }
};

const sortProduct = async (sortDir, sortField) => {
  try {
    const result = await callApi('GET', `products?sortDir=${sortDir}&sortField=${sortField}`);
    return result.data;
  } catch (error) {
    console.error('Error in sortProduct:', error);
    throw error;
  }
};

//CategoryService
//All Categories
const getAllCategory = async () => {
  try {
    const result = await callApi('GET', 'rest/category');
    return result;
  } catch (error) {
    console.error('Error in getAllCategory:', error);
    throw error;
  }
};

const getCategoryById = async (id) => {
  try {
    const result = await callApi('GET', `rest/category/${id}`);
    return result;
  } catch (error) {
    console.error('Error in getCategoryById:', error);
    throw error;
  }
};

//Post Categories
const addNewCategory = async (data) => {
  try {
    const result = await callApi('POST', 'rest/category', data);
    return result;
  } catch (error) {
    console.error('Error in addNewCategory:', error);
    throw error;
  }
};

//Delete category
const deleteCategory = async (categoryId) => {
  try {
    // Gọi API để xóa danh mục
    const result = await callApi('DELETE', `rest/category/${categoryId}`);
    return result;
  } catch (error) {
    console.error('Error in deleteCategory:', error);
    throw error;
  }
};

//Put category
const putCategory = async (categoryId, data) => {
  try {
    const result = await callApi('PUT', `rest/category/${categoryId}`, data);
    return result;
  } catch (error) {
    console.error('Error in deleteCategory:', error);
    throw error;
  }
};

//Checking Category
const isCategoryExist = async (categoryName) => {
  try {
    const categories = await callApi('GET', 'rest/category');
    console.log(categories.some((category) => category.name === categoryName));
    return categories.some((category) => category.name === categoryName);
  } catch (error) {
    console.error('Error in isCategoryExist:', error);
    throw error;
  }
};

//Pagination category
//EndOfCartegoryCervice

//All Provinces
const getAllProvinces = async () => {
  try {
    const result = await axios.get('https://provinces.open-api.vn/api/p/');
    return result.data;
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    throw error;
  }
};

const getAllUser = async () => {
  try {
    const result = await callApi('GET', 'accounts');
    return result;
  } catch (error) {
    console.error('Error in getAllUser:', error);
    throw error;
  }
};

const vnPayPayment = async (data) => {
  try {
    const result = await callApi('POST', 'payment/submitOrder', data);
    return result;
  } catch (error) {
    console.error('Error in payment:', error);
    throw error;
  }
};

//ColorService
//Get all color
const getAllColor = async () => {
  try {
    const result = await callApi('GET', 'rest/color');
    return result;
  } catch (error) {
    console.error('Error in getAllColor: ', error);
    throw error;
  }
};

//Login
const handleLogin = async (data) => {
  try {
    const authHeader = `Basic ${btoa(`${data.username}:${data.password}`)}`;
    const response = await axios.post('http://localhost:8080/auth/signin', data, {
      headers: {
        Authorization: authHeader,
      },
    });
    const token = response.data;
    localStorage.setItem('token', JSON.stringify(token));
  } catch (error) {
    console.error('Login failed:', error);
  }
};

const getAllSupplier = async () => {
  try {
    const result = await callApi('GET', 'rest/supplier');
    return result;
  } catch (error) {
    console.error('Error in getsupllier: ', error);
    throw error;
  }
};

export {
  getProductById,
  getAllProduct,
  addNewProduct,
  sortProduct,
  getAllCategory,
  addNewCategory,
  deleteCategory,
  isCategoryExist,
  getAllProvinces,
  getCategoryById,
  putCategory,
  getAllUser,
  getAllColor,
  getAllSupplier,
  vnPayPayment,
  handleLogin,
};
