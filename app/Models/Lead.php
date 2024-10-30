<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Class Lead
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property int $lead_status_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Lead extends Model
{
    use HasFactory;

    protected $table = 'leads';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'lead_status_id'
    ];

    /**
     *
     *
     * @return HasOne
     */
    public function leadStatus(): HasOne
    {
        return $this->hasOne(LeadStatus::class, 'id', 'lead_status_id');
    }


}
