<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(){
        return view('frontend.index');
    }

    public function nccp(){
        return view('frontend.nccp');
    }
    public function news(){
        return view('frontend.news');
    }
    public function zjpp(){
        return view('frontend.zjpp');
    }
    public function jmwm(){
        return view('frontend.jmwm');
    }
    public function top(){
        return view('frontend.top');
    }
    public function fee(){
        return view('frontend.fee');
    }
}
