<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhonemanagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phonemanages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('phoneno',11)->index();
            $table->string('name')->nullable();
            $table->string('gender')->nullable()->index();
            $table->string('address')->nullable();
            $table->ipAddress('ip')->nullable()->index();
            $table->string('note')->nullable();
            $table->string('host')->nullable()->index();
            $table->string('referer')->nullable()->index();
            $table->string('category')->nullable()->index();
            $table->integer('cid')->nullable()->index();
            $table->string('brandname')->nullable()->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phonemanages');
    }
}
