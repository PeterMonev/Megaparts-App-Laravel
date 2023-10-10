<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class UserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!Auth::check()) {
            return redirect('login')->withErrors('Моля влезте с профила си за да имате достъп до тази страница.');
        }

        if (Auth::user()->role !== 'user') {
            return redirect('home')->withErrors('Нямате достъп до тази страница.');
        }

        return $next($request);
    }
}
