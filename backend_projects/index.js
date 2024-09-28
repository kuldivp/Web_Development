const express = require("express");
const urlroute = require("./routes/url");
const { connect_to_mongodb } = require("./connect");
const url = require('./models/url');
const shortid = require("shortid");

const app = express();
const PORT = 8001;
app.use(express.json());
connect_to_mongodb('mongodb://localhost:27017/short-url');

app.use("/url", urlroute);

app.get('/:shortid', async (req, res) => {
    const shortId = req.params.shortid;
    try {
        const entry = await url.findByIdAndUpdate(
            { shortid: shortId },
            { $push: { visithistory: {} } },
            { new: true }
        );
        if (entry) {
            res.redirect(entry.redirectURL);
        } else {
            res.status(404).send('URL not found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
