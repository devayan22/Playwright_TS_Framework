import {generateRandomString,generateRandomNumber} from '../utils/randomDataGenerator';

export const payloads = {

    /*
    createProduct: {
        id: 21,
        title: 'Test Product',
        price: 29.99,
        description: 'Product created through Playwright API test',
        image: 'https://i.pravatar.cc',
        category: 'electronics'
    },

    updateProduct: {
        title: 'Updated Test Product',
        price: 39.99,
        description: 'Product updated through Playwright API test',
        image: 'https://i.pravatar.cc',
        category: 'electronics'
    }
    */

  createProduct: {
    title: `Test Product ${generateRandomString()}`,
    price: generateRandomNumber(10, 100),
    description: `Product ${generateRandomString()} created through Playwright API test`,
    image: 'https://i.pravatar.cc',
    category: 'electronics'
  },

  updateProduct: {
    id: 1,
    title: `Updated Product ${generateRandomString()}`,
    price: generateRandomNumber(10, 100),
    description: `Updated product ${generateRandomString()}`,
    image: 'https://i.pravatar.cc',
    category: 'electronics'
  }
};
