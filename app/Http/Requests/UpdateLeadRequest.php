<?php

namespace App\Http\Requests;

use App\Models\LeadStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateLeadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $leadStatusIds = LeadStatus::all()->pluck('id')->toArray();
        return [
            "name" => ['required', 'max:255', 'min:2'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'max:255', 'min:10'],
            'lead_status_id' => ['required', Rule::in($leadStatusIds)]
        ];
    }
}
