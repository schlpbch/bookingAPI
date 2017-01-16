'use strict';

module.exports = {
    getBillette
};

function getBillette(req, res) {
    if ('pdf' == req.query.typ) {
        var options = {
            root: __dirname + '/../../public/'
        };
        res.sendFile('billette/billettB1.pdf', options);
    } else {
        res.sendStatus(415);
    }
}
