import React from 'react'

function ProductRow({ id, name, value, addToCart }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      maxWidth: '220px',
      marginBottom: '5px'
    }}>
      <p style={{ margin: 0 }}>
        {name}: R${value}
      </p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  )
}

export default ProductRow;