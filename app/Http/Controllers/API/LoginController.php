<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use DB;

class LoginController extends Controller
{
    public function login(Request $request) 
    {
    		$credentials = $request->only('email', 'password');
    	if (Auth::attempt($credentials)) {
            $user=Auth::user();
            $success['token']=$user->createToken('MyApp')->accessToken;
            return response()->json(['success'=>$success,200]);
    	} 
    	else
    	{
    		return response()->json(['error'=>'Unauthorized',401]);
    	}
    }

    public function register(Request $request)
    {
    		$input= $request->all();

    	$input['password']=bcrypt($input['password']);
    	$user=User::create($input);
    	return response()->json(['success'=>'Registerd successfully']);
    }

    public function addSlider(Request $request)
    {
    	$sliderName = $request->name;
    	$sliderImage = $request->image;
    	$img = str_replace('data:image/jpeg;base64,','', $sliderImage);
    	$img = str_replace(' ','+', $img);
    		
            $fileName = uniqid().'.jpg';
    	file_put_contents(public_path().'/slider/'.$fileName, base64_decode($img));
    	
        $image = '/slider/'.$fileName;
    	try {
    		DB::table('sliders')->insert( ['slider_name' => $sliderName, 'image' => $image]);
    		return response()->json(['success'=>'Slider Added successfully','status'=>200]);
    	} catch (Exception $e) {
    		
    		return response()->json(['error'=>$e->getMessage(),'status'=>500]);
    	}
    }
}
