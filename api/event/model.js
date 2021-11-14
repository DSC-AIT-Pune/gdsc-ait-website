const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    "event_info": {
        "event_name": { type: String, required: true },
        "event_discription": { type: String, required: true },
        "event_thumbnail_url": { type: String, required: true },
        "event_banner_url": { type: String },
        "event_landing_url": { type: String, required: true },
        "event_hosting_url": { type: String },
        "event_rspv_link": { type: String },
        "event_speaker": { type: String, required: true },
        "event_organizer": { type: String, required: true },
        "event_video_link": { type: String },
    },
    "post_event": {    
        "event_recording_url": { type: String },
        "event_ppt_url": { type: String },
        "event_resource_document_url": { type: String },
    },
    "mention": {
        "results":{ type: String },
    }
    
});

module.exports = mongoose.model("events", eventSchema);

