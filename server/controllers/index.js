
module.exports = function (app, db) {
  let signup_details = db.model('signup_details');
  let friend_details = db.model('friend_details');
  let subject_details = db.model('subject_details');

  app.get('/subject/search', (req, res) => {
    subject_details.find().exec((err, subject) => {
      if (!err) {
        res.send({
          result: "Success",
          data: subject
        });
      } else {
        res.status(400).send({
          result: "Failure",
          message: "Error in fetching subject list",
          error: err.message
        });
      }
    });
  });

  app.get('/friends/search', (req, res) => {
    friend_details.find().exec((err, friend) => {
      if (!err) {
        res.send({
          result: "Success",
          data: friend
        });
      } else {
        res.status(400).send({
          result: "Failure",
          message: "Error in fetching Profile list",
          error: err.message
        });
      }
    });
  });

  app.get('/SignIn',(req,res)=>{
    let text = req.query.text;
    console.log(text);
    let search_by = 'email';
    let query = {};
    query[search_by] = { $regex:text, $options: 'i' };
    signup_details.find(query).exec((err, signup) => {
      if (!err) {
        console.log(signup);
        res.send({
          result: "Success",
          data: signup
        });
      } else {
        res.status(400).send({
          result: "Failure",
          message: "Error in fetching students list",
          error: err.message
        });
      }
    });
  });

  //api to create student details
  app.post('/signup/register', (req, res) => {
    let profile = req.body;
    let sign_details = new signup_details({
      userName: profile.userName,
      email: profile.email,
      password: profile.password,
      confirmPassword: profile.confirmPassword
    });
    sign_details.save((err, profile) => {
      if (!err) {
        res.send({
          result: "Success",
          message: "Details saved successfully"
        });
      } else {
        res.status(400).send({
          result: "Failure",
          message: "Error in creating student",
          error: err.message
        });
      }
    })
  });
}
