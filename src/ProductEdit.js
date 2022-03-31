import React from 'react'

function ProductEdit() {
  return (
      <>
    <h1 class="h3 mb-4 text-gray-800">Create Product</h1>
    <div class="row">
    <div class="col-6">
    <label for="input" class="form-label">Brand</label>
      <input type="text" class="form-control" aria-label="First name"/>
    </div>
    <div class="col-6">
    <label for="input" class="form-label">Price</label>
      <input type="text" class="form-control"  aria-label="Last name"/>
    </div>
    <div class="col-6 mt-2">
    <label for="input" class="form-label">Year</label>
      <input type="text" class="form-control"  aria-label="First name"/>
    </div>
    <div class="col-6 mt-2">
    <label for="input" class="form-label">Model</label>
      <input type="text" class="form-control" aria-label="Last name"/>
    </div>
    <div class="col-6 mt-2">
    <label for="input" class="form-label">Colors</label>
      <input type="text" class="form-control"  aria-label="Last name"/>
    </div>
    
    <div class="col-8 mt-3">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    
  </div>
  </>
  )
}

export default ProductEdit