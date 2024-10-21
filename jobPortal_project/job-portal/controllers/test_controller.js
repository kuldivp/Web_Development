// test_controller.js
export const testpostcontroller = (req, res) => {
    const { name } = req.body; // Destructuring to get the name from the request body
    if (!name) {
        return res.status(400).send('Name is required.'); // Handle case where name is not provided
    }
    res.status(200).send(`Your name is ${name}`); // Respond with the name
};
