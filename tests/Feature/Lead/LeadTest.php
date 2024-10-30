<?php

namespace Tests\Feature\Lead;

use App\Models\User;
use Tests\TestCase;

class LeadTest extends TestCase
{
    // @todo: use a separate Testing-only database.

    public function test_lead_page_requires_authentication(): void
    {
        $response = $this->get('/lead');
        $response->assertStatus(302);
    }

    public function test_lead_page_requires_authentication_pass(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/lead');
        $response->assertStatus(200);
    }

    // @todo: Test each LeadController route, including ones requiring post data.
}
