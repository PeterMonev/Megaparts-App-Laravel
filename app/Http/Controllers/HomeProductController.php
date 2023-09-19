<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class HomeProductController extends Controller
{
    public function apiProducts() {
        $products = Product::all();
        return response()->json($products);
    }
}
