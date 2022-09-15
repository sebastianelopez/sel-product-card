import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should display the component correctly with the custom image', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
