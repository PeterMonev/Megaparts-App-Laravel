<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\HomeProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});

// Home Products
Route::get('/api/products', [HomeProductController::class, 'apiProducts']);

// Home User
Route::get('/is-logged-in', [UserController::class, 'isLoggedIn'])->name('user.loggedin');

Auth::routes();

// Products Cart
Route::delete('/cart/remove/{id}', [CartController::class, 'remove'])->name('cart.remove');
Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
Route::get('/cart',  [CartController::class, 'index'])->name('cart.index');
Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');



// Admin Products
Route::middleware(['auth', 'admin'])->group(function() {
    Route::resource('products', ProductController::class);
});


// Admin Users
Route::middleware(['auth', 'admin'])->group(function() {
    Route::resource('users', UserController::class);
});
