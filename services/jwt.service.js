const tokenBlacklist = [];

const jwtBlackListToken = async (token) => {
    const response = false;
    if (token && tokenBlacklist.includes(token)) {
      response = true;
      res.status(401).json({ message: 'Unauthorized' });
    }
    return response;
  return tokenBlacklist.includes(token);
};

module.exports = { tokenBlacklist, jwtBlackListToken };
