/**
 * Dynamically generates list of <options> from the list of LeadStatuses.
 *
 * @param leadStatuses
 * @returns {*[]}
 * @constructor
 */
export default function LeadStatusOptions({leadStatuses}) {
    let options = [];
    options.push(<option value="" key={0}>Select Status</option>);
    for (const [leadStatusId, leadStatus] of Object.entries(leadStatuses)) {
        options.push(<option value={leadStatusId} key={leadStatusId}>{leadStatus.name}</option>);
    }
    return options;
}
