exports.register = (req, res, next) => {
    res.send("This is register route")
}

exports.login = (req, res, next) => {
    res.send("This is login route")
}

exports.forgotPassword = (req, res, next) => {
    res.send("This is forgot password route")
}

exports.resetPassword = (req, res, next) => {
    res.send("This is Reset password route")
}