<?php

namespace App\Http\Controllers\Frontend;

use App\AdminModel\Admin;
use App\AdminModel\Phonemanage;
use App\Events\PhoneEvent;
use App\Notifications\MailSendNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Log;
class PhoneController extends Controller
{
    function phoneComplate(Request $request)
    {
        if(empty(Phonemanage::where('ip', $request->getClientIp())->where('created_at','>',Carbon::now()->subSeconds(10))->where('created_at','<',Carbon::now())->value('ip')))
        {
            $request['host']=$request->input('host');
            $request['ip']=$request->getClientIp();
            Phonemanage::create($request->all());
            Admin::first()->notify(new MailSendNotification(Phonemanage::latest() ->first()));
            //event(new PhoneEvent(Phonemanage::latest() ->first()));
            echo '电话提交成功！我们将尽快与您联系';
        }else{
            echo '电话号码已存在，请点击在线咨询客服';
        }
    }
}
