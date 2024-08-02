/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Class Project' });
    };
module.exports = {
    index
    };