<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Al Moustakbal</title>

    <!-- Al Moustakbal-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">


    <link href="{{ asset('assets/vendors/core/core.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/vendors/flag-icon-css/css/flag-icon.min.css') }}" rel="stylesheet">
    <script src="{{ asset('assets/vendors/feather-icons/feather.min.js') }}"></script>
    <script src="{{ asset('assets/vendors/core/core.js') }}"></script>



    <link href="{{ asset('assets/fonts/feather-font/css/iconfont.css') }}" rel="stylesheet">

    <link href="{{ asset('assets/css/demo1/style.css') }}" rel="stylesheet">

    <script src="{{ asset('assets/js/template.js') }}"></script>
    <script src="{{ asset('assets/js/chat.js') }}"></script>


    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased sidebar-folded">
    @inertia
</body>

</html>
