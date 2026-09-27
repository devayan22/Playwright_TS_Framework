import { envConfig } from './envConfig';

export const urls = {
  orangeHRM: {
    login: `${envConfig.orangeHRMBaseUrl}/web/index.php/auth/login`,
    dashboard: `${envConfig.orangeHRMBaseUrl}/web/index.php/dashboard/index`
  },

  fakeStore: {
    products: `${envConfig.fakeStoreBaseUrl}/products`,
    users: `${envConfig.fakeStoreBaseUrl}/users`,
    carts: `${envConfig.fakeStoreBaseUrl}/carts`
  }
};