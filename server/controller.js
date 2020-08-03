
const shopitems = require('./shopitems.json')

module.exports = {
    getshopitems: (req, res) => {
        res.status(200).send(getshopitems);
    },
    addShopitems: (req, res) => {
        const { title} = req.body;
        if (!title) {
            res.status(405).send('Expect shopitem naming title')
        } else {
            const newShopitem = {
                id,
                name,
                inventory,
                description,
                //in cart, //
            };
            shopitems.push(newShopitem);
            id++;
            res.status(200).send(shopitems);
        }
    },
}