# SEL-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Sebastian Lopez

## Ejemplo

```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons
} from 'do-product-card';
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