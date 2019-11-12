<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('sachin','API\LoginController@bind');

Route::get('test',function () {




$break = "sachin";

for($i=strlen($break)-1;$i>-1;$i--)
{
    $ca[] = $break[$i];
}
$dd = implode('',$ca);
dd($dd);





$check = array(1,12,4,7,5,9);
$n = count($check);
$max = $check[0];
for($i=0;$i<$n;$i++)
{
    if($max<$check[$i])
    {
        $max = $check[$i];
        
    }
    
}
return $max;
echo "--end";

$n= 5;

for($i=1;$i<=$n;$i++)
{
    for($j=1;$j<=$n;$j++)
    {
        if($j<=($n-$i))
        {
            
            echo "&nbsp;&nbsp";
        }
        else
        {
            
            echo "*";
        }
    
    }
    echo "<br/>";
}

echo "-----doine";die;



for($i=1;$i<=$n+1;$i++)
{
    for($j=5;$j>=$i;$j--)
    {
        echo $i;
    }
    echo "<br/>";
}

echo "---stop";die;





$data = "sachin";
for($i=strlen($data)-1;$i>=0;$i--)
{
        echo $data[$i];
}
echo "stop";die;
$checkExplode = explode(' ',$data);
$total = count($checkExplode)-1;
for($i=$total;$i>=0;$i--)
{

echo $checkExplode[$i]." ";
}

});

Route::get('/{path}', function () {
    return view('welcome');
})->where('path','.*');
