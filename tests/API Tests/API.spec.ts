import {test,expect,request} from '@playwright/test';
import { payloads } from '../../payloads/payloads';
import { urls } from '../../config/urls';

test('GET Request',async({request})=>
{
   const response = await request.get(urls.fakeStore.products);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    
});

test('GET Request for a particular product',async({request})=>
{
   const productId = 1;
   const response = await request.get( `${urls.fakeStore.products}/${productId}`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.id).toBe(productId);

});

test('POST Request',async({request})=>
{

 const response = await request.post(urls.fakeStore.products, {
        data: payloads.createProduct
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.title).toBe(payloads.createProduct.title);
    expect(responseBody.price).toBe(payloads.createProduct.price);

});


test('PUT Request',async({request})=>
{
       const productId = 21;
       const response = await request.put( `${urls.fakeStore.products}/${productId}`, {
        data: payloads.updateProduct
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.title).toBe(payloads.updateProduct.title);
    expect(responseBody.price).toBe(payloads.updateProduct.price);


});


test('Delete Request',async({request})=>
{
   const productId = 21;
  const response = await request.delete( `${urls.fakeStore.products}/${productId}`);

    expect(response.status()).toBe(200);

    const responseBody = await response.text();
    console.log(responseBody);

});