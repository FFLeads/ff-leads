<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLeadRequest;
use App\Http\Requests\UpdateLeadRequest;
use App\Http\Resources\LeadResource;
use App\Models\Lead;
use App\Models\LeadStatus;

class LeadController extends Controller
{
    /**
     * Renders the landing page and table for Leads.
     *
     * @return mixed
     */
    public function index()
    {
        $query = Lead::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (!empty(request("name")))
        {
            $query->where("name", "like", "%" . request("name") . "%");
        }

        if (!empty(request("status")))
        {
            $query->where("lead_status_id", request("status"));
        }

        $leads = $query->orderBy($sortField, $sortDirection)
            ->paginate(20)
            ->withQueryString()
            ->onEachSide(1);

        return inertia("Lead/Index", [
            'leads' => LeadResource::collection($leads),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'leadStatuses' => LeadStatus::all()->keyBy("id")->toArray(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Lead/Create", [
            'leadStatuses' => LeadStatus::all()->keyBy("id")->toArray(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLeadRequest $request)
    {
        $data = $request->validated();
        Lead::create($data);

        return to_route('lead.index')
            ->with('success', 'Lead was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Lead $lead)
    {
        return inertia('Lead/Show', [
            'lead' => new LeadResource($lead),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'leadStatus' => $lead->leadStatus()->get()->first()->name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lead $lead)
    {
        return inertia('Lead/Edit', [
            'lead' => new LeadResource($lead),
            'leadStatuses' => LeadStatus::all()->keyBy("id")->toArray(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLeadRequest $request, Lead $lead)
    {
        $data = $request->validated();
        $lead->update($data);

        return to_route('lead.index')
            ->with('success', "Lead \"$lead->name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lead $lead)
    {
        $name = $lead->name;
        $lead->delete();
        return to_route('lead.index')
            ->with('success', "Lead \"$name\" was deleted");
    }
}
