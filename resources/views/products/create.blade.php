@extends('adminlte::page')

@section('title', 'Add New Product')

@section('content_header')
    <h1>Add New Product</h1>
@stop

@section('content')
    @include('partials.createProductForm')
@stop
