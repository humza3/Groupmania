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
        userId: req.params.id
      },
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
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


exports.modifyUserAccount = (req, res) => {
  User.update({
      role: req.body.role
    }, {
      where: {
        userId: req.params.id
      }
    })
    .then(count => {
      console.log('Rows updated' + count)
    })
};


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
