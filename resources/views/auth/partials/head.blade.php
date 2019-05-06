<!-- Basic meta -->
<meta charset="UTF-8">

@section('title')
    <title>Collab</title>
@show

<meta name="viewport" content="user-scalable=no,width=device-width,height=device-height,initial-scale=1,maximum-scale=1">
@yield('meta')

<!-- Favicon -->
<link rel="apple-touch-icon" sizes="57x57" href="{{ URL::asset('front/favicon/apple-icon-57x57.png') }}">
<link rel="apple-touch-icon" sizes="60x60" href="{{ URL::asset('front/favicon/apple-icon-60x60.png') }}">
<link rel="apple-touch-icon" sizes="72x72" href="{{ URL::asset('front/favicon/apple-icon-72x72.png') }}">
<link rel="apple-touch-icon" sizes="76x76" href="{{ URL::asset('front/favicon/apple-icon-76x76.png') }}">
<link rel="apple-touch-icon" sizes="114x114" href="{{ URL::asset('front/favicon/apple-icon-114x114.png') }}">
<link rel="apple-touch-icon" sizes="120x120" href="{{ URL::asset('front/favicon/apple-icon-120x120.png') }}">
<link rel="apple-touch-icon" sizes="144x144" href="{{ URL::asset('front/favicon/apple-icon-144x144.png') }}">
<link rel="apple-touch-icon" sizes="152x152" href="{{ URL::asset('front/favicon/apple-icon-152x152.png') }}">
<link rel="apple-touch-icon" sizes="180x180" href="{{ URL::asset('front/favicon/apple-icon-180x180.png') }}">
<link rel="icon" type="image/png" sizes="192x192" href="{{ URL::asset('front/favicon/android-icon-192x192.png') }}">
<link rel="icon" type="image/png" sizes="32x32" href="{{ URL::asset('front/favicon/favicon-32x32.png') }}">
<link rel="icon" type="image/png" sizes="96x96" href="{{ URL::asset('front/favicon/favicon-96x96.png') }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ URL::asset('front/favicon/favicon-16x16.png') }}">
<link rel="manifest" href="{{ URL::asset('front/favicon/manifest.json') }}">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="{{ URL::asset('front') }}/favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<link rel="stylesheet" href="{{ URL::asset('front/static/css/login-script.css') }}">
<link rel="stylesheet" href="{{ URL::asset('front/static/css/login-style.css') }}">
<link rel="stylesheet" href="{{ URL::asset('front/static/css/login-checkbox.css') }}">
<link rel="stylesheet" href="{{ URL::asset('front/static/css/login.css') }}">
@yield('styles')