<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class LeadStatus
 *
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class LeadStatus extends Model
{
    protected $table = 'lead_statuses';

    /**
     * Get the comments for the blog post.
     */
    public function leads(): HasMany
    {
        return $this->hasMany(Lead::class, 'lead_status_id', 'id');
    }

    protected $fillable = [
        'name'
    ];
}
