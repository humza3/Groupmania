const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({
        email: req.body.email,
		lastname: req.body.lastname,
		firstname: req.body.firstname,
		password: hash,
		admin: 0
      });
	  console.log(user);
      user.save().then(
        () => {
          res.status(201).json({
            message: 'User added successfully!'
			//create user table
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  );
};


exports.login = (req, res) => {
  User.findOne({
      where: {
        email: req.body.email,
      },
    })
    .then(function (User) {
      console.log(User.get({
        plain: true
      }))
      bcrypt
        .compare(req.body.password, User.password, function (err, result) {
          if (result == true) {
            res
              .json({
                firstname: User.firstName,
				lastname: User.lastname,
                employee_id: User.employee_id,
                token: jwt.sign({
                  employee_id: User.employee_id
                }, 'RANDOM_TOKEN_SECRET', {
                  expiresIn: "2h",
                }),
              })
          } else {
            res.status(401).json({
              error: "Incorrect Password!",
            });
          }
        })
    })
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
};

exports.getUserAccount = (req, res) => {
  User.findOne({
		where: {
			employee_id: req.params.id
		},
    })
    .then((user) => {
		res.status(200).send(user);
    })
    .catch((error) => {
		console.log("cannot find user");
		res.status(404).send({
			message: "User not found",
		});
    });
};


exports.getAllUsers = (req, res) => {
  User.findAll({
      include: [{
        model: db.posts,
        include: [{
          model: db.comments,
        }]
      }],

    })
    .then(users => {
      res.json(users)

    })
    .catch((error) => {
      res.status(404).send
    })
}


exports.modifyUser = (req, res, next) => {
	console.log("im over here 1");
	const user = new User({
		employee_id: req.params.id,
		profile: req.body.profile
      });
	console.log("this is what the user reads",  user)
	user.update({admin : 0}, {where: {employee_id: req.params.id}}).then(
		(user) => {
			console.log("im over here 2");
			res.status(201).json({
				message: 'User updated successfully!'
			});
			console.log("im over here 3");
		}
	).catch(
		(error) => {
			console.log("im over here 4");
			res.status(400).json({
				error: error
			});
		}	
	);
};
//update sauces with modifications
/*exports.modifyUser = (req, res, next) => {
	let user = new User({employee_id: req.params.id});
	console.log("employee_id: ", req.params.id);
	User.findOne({ where: {employee_id: req.params.id}}).then(() => {
			user = {
				employee_id: req.body.user.employee_id,
				firstname: req.body.user.firstname,
				lastname: req.body.user.lastname,
				profile: req.body.user.profile	
			};	
			console.log("WHAT SOES USER MEAN?? ", user);
			User.update({employee_id: req.params.id}, user).then(
					() => {
						res.status(201).json({
						message: 'User updated successfully!'
					});
					}
			).catch(
				(error) => {
						res.status(400).json({
						error: error
					});
				}	
			);
		}).catch((error) => {
			console.log("cannot find and update user")
			res.status(404).json({error: error});				
		});	
		console.log(user);
	User.update({employee_id: req.params.id}).then(
		() => {
			res.status(201).json({
				message: 'User updated successfully!'
			});
		}
	).catch(
		(error) => {
			res.status(400).json({
				error: error
			});
		}	
	);
};*/


exports.deleteUserAccount = (req, res) => {
  User.findOne({
      where: {
        userId: req.params.id
      },
    })
    .then((user) => {
      user.destroy();
    })
    .catch(error => res.status(400).json({
      error
    }))
};
