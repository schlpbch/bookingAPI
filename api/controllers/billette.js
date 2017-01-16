'use strict';

module.exports = {
    getBillette
};

function getBillette(req, res) {
    var billette = {
        'links': [{
            'rel': "PDF zur Buchung",
            'href': "http://localhost:10001/billete/billettB1.pdf"
        }]
    }
    res.json(billette);
}