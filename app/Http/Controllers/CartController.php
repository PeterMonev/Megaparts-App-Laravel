<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
  public function add(Request $request) {
    $productId = $request->input('product_id');
    $product = Product::find($productId);

    if (!$product) {
        return response()->json(['message' => 'Product not found'], 404);
    }

    $cart = session()->get('cart', []);
    
    if (isset($cart[$productId])) {
        $cart[$productId]['quantity']++;
    } else {
        $cart[$productId] = [
            'id' => $productId,
            'name' => $product->name,
            'image_url' => $product-> image_url,
            'description' => $product-> description,
            'price' => $product->price,
            'quantity' => 1
        ];
    }

    session()->put('cart', $cart);
    return response()->json(['message' => 'Продукът беше добавен успешно в количката.']);
}

public function remove($id) {
  $cart = session()->get('cart', []);


  if(isset($cart[$id])) {
      unset($cart[$id]);
      
      session()->put('cart', $cart);
  }

  return redirect()->back()->with('success', 'Продуктът беше успешно премахнат от количката.');
}


public function index()
{
    $cart = session('cart');

    return view('cart')->with('cart', $cart);
}

}
