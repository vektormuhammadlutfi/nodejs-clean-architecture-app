'use strict';
module.exports = (userId, { userRepository }) => {
    return userRepository.remove(userId);
};
//# sourceMappingURL=DeleteUser.js.map