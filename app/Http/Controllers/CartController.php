<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
  public function add(Request $request){
    $productId = $request->input('product_id');
    $product = Product::find($productId);
    dd(    $productId );
    dd(    $product );
    if(!$product){
        return response()->json(['message' => 'Product not found.'], 404);
    }

    $cart = session()->get('cart', []);

    if(isset($cart[$productId])){
        $cart[$productId]['quantity']++;
    } else {
        $cart[$productId] = [
            'id' => $product->id,
            'name' => $product->name,
            'description' => $product->desciption,
            'price' => $product->price,
            'quantity' => 1
        ];
    }

    session()->put('cart', $cart);
    return response()->json(['message' => 'Продуктът беше добавен в кошницата.', 'cart_count' => count($cart)]);
  }

  public function index() {
    $cart = session()->get('cart', []);
    return view('cart.index', compact('cart'));
  }
}
