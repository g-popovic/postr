function authUser(req, res, next) {
	if (!req.session || !req.session.user || !req.session.user.id || !req.session.user.address) {
		return res.sendStatus(401);
	}

	req.user = req.session.user;
	next();
}

module.exports = {
	authUser,
};
