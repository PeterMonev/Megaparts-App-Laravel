<form action="{{ route('products.update', $product->id) }}" method="POST">
    @csrf
    @method('PUT')
    <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" class="form-control" value="{{ old('name', $product->name) }}" required>
    </div>
    <div class="form-group">
        <label>Description</label>
        <textarea name="description" class="form-control" required>{{ old('description', $product->description) }}</textarea>
    </div>
    <div class="form-group">
        <label>Price</label>
        <input type="number" step="0.01" name="price" class="form-control" value="{{ old('price', $product->price) }}" required>
    </div>
    <div class="form-group">
        <label>Image URL</label>
        <input type="url" name="image_url" class="form-control" value="{{ old('image_url', $product->image_url) }}">
    </div>
    <button type="submit" class="btn btn-primary">Update</button>
</form>