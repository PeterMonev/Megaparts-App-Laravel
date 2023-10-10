@extends('layouts.app')

@section('content')

<h2 class="mb-4">Вашата Количка</h2>

@if(session('cart') && count(session('cart')) > 0)
<table class="table table-bordered table-striped h-100">
    <thead>
        <tr>
            <th>Изображение</th>
            <th>Име на продукта</th>
            <th>Описание</th>
            <th>Цена</th>
            <th></th>
        </tr>
    </thead>
    <tbody>

        @foreach(session('cart') as $product)

        <tr>
            <td><img src="{{ $product['image_url'] ?? 'default-image-url-here' }}" width="100" alt="{{ $product['name'] }}"></td>
            <td>{{ $product['name'] }}</td>
            <td>{{ $product['description'] }}</td>
            <td>{{ $product['price'] }} лв.</td>
            <td>
                <form method="POST" action="{{ route('cart.remove', $product['id']) }}" onsubmit="return confirm('Сигурни ли сте, че искате да премахнете този продукт от количката?');">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger btn-sm">Премахни</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@else
<p class="text-center">Вашата количка е празна!</p>
@endif

@endsection
