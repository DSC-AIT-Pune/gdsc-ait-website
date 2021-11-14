const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    "name": { type: String, required: true },
    "position": { type: String, required: true },
    "image_url": { type: String, required: true },
    "social_profiles":{
        "gdsc":{ type: String, required: true },
        "linkedIn":{ type: String, required: true },
        "gitHub":{ type: String, required: true },
        "facebook":{ type: String, required: true },
        "instagram":{ type: String, required: true },
    }
});

module.exports = mongoose.model("members", memberSchema);

/*
{
    "name": "Shekhar Kumar Singh",
    "position": "GDSC Lead",
    "image_url": "https://avatars.githubusercontent.com/u/51144829?v=4",
    "social_profiles":{
        "gdsc":String,
        "linkedIn":"https://www.linkedin.com/in/the-anton/",
        "gitHub":"https://github.com/The-Anton",
        "facebook":"https://www.facebook.com/profile.php?id=100005728093339",
        "instagram":"https://www.instagram.com/the_anton.01/",
        "twitter":"https://twitter.com/the_anton01",
    }
}

*/