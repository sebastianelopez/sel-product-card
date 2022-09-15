# SEL-Product-Card

This is a NPM deployment test package

### Sebastian Lopez

## Example

```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons
} from 'sel-product-card';
```

```
<ProductCard        
        product={product}        
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({
          count,
          increaseBy,
          isMaxCountReached,
          product, 
          reset,
          maxCount,
        }) => (
          <>
            <ProductImage  />

            <ProductTitle  />

            <ProductCard.Buttons />

          </>
        )}
      </ProductCard>

```