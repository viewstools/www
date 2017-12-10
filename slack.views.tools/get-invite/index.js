const {json} = require('micro');
const cors = require('micro-cors')();
const request = require('request');

module.exports = cors(async (req, res) => {
  const data = await json(req);

  if (data.email) {
    await request.post({
      url: `https://${process.env.APP}.slack.com/api/users.admin.invite`,
      form: {
        email: data.email,
        resend: true,
        set_active: true,
        token: process.env.TOKEN,
      },
    });
  }
});
