const { json } = require("body-parser");
const shortid = require("shortid");
const URL = require("../models/url");

async function handle_generate_newshort_url(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'url is required' });

    const shortId = shortid.generate();
    await URL.create({
        shortid: shortId,
        redirectURL: body.url,
        visithistory: [],
    });

    return res.json({ id: shortId });
}

module.exports = {
    handle_generate_newshort_url,
};
