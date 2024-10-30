<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
		// @todo
	    /*   Column ............................................ Type
  id bigint, autoincrement ...................... bigint unsigned
  name varchar, utf8mb4_unicode_ci ................. varchar(191)
  email varchar, utf8mb4_unicode_ci ................ varchar(191)
  phone varchar, utf8mb4_unicode_ci ................ varchar(191)
  lead_status_id int ........................................ int
  created_at timestamp, nullable ...................... timestamp
  updated_at timestamp, nullable ...................... timestamp*/
        /*Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });*/
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
	    // @todo
        //Schema::dropIfExists('leads');
    }
};
