<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class LoginController extends Controller
{

		public function bind()
		{
			$n=6;
			for($i=0;$i<$n;$i++)
			{
				for($j=0;$j<=$i;$j++)
				{
					echo "*";
				}
				echo "<br/>";
			}	
			echo "end";die;


			$n = 10;
			$res = 0;
			$ch = 0;

			$num1 = 0; 
    $num2 = 1; 
  
    $counter = 0; 
    while ($counter < $n){ 
        echo $num1; 
        $num3 = $num2 + $num1; 
        $num1 = $num2; 
        $num2 = $num3; 
        $counter = $counter + 1; 
    } 

		}

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
	
	public function delete(Request $request, $id)
	{
		
		DB::table('sliders')->where('id',$id)->delete();
		$slider = DB::table('sliders')->get();
		return response()->json(['result'=>$slider,'success'=>'Deleted successfully','status'=>200]);
	
	}

    public function register(Request $request)
    {
    		$input= $request->all();

    	$input['password']=bcrypt($input['password']);
    	$user=User::create($input);
    	return response()->json(['success'=>'Registerd successfully']);
	}
	
	public function sliderList(Request $request)
	{
		
		if(empty(trim($request->search)))
		{
			$slider = DB::table('sliders')->get();
		return response()->json(['result'=>$slider,'status'=>200]);
		}
		else
		{
			$slider = DB::table('sliders')->where('slider_name', 'like', "%".$request->search."%")->get();
		return response()->json(['result'=>$slider,'status'=>200]);
		}
		
	}

    public function addSlider(Request $request)
    {
		$sliderName = $request->name;
		if($request->image != null)
		{
			$sliderImage = $request->image;
				
			$img = str_replace('data:image/jpeg;base64,','', $sliderImage);
			$img = str_replace(' ','+', $img);
				
				$fileName = uniqid().'.jpg';
			file_put_contents(storage_path().'/slider/'.$fileName, base64_decode($img));

			$url = url('storage/slider/'.$fileName);
	
			
			
			//$image = '/slider/'.$fileName;
		}
		else
		{
			return response()->json(['error'=>'Please choose an Image ','status'=>500]);
		}
		
    	try {
    		DB::table('sliders')->insert( ['slider_name' => $sliderName, 'image' => $url]);
    		return response()->json(['success'=>'Slider Added successfully','status'=>200]);
    	} catch (Exception $e) {
    		
    		return response()->json(['error'=>'Slider Name Missing','status'=>500]);
    	}
    }
}
