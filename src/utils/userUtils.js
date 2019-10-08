export const getCurrentUser = (users, id) => {
  const currentId = id * 1;
  const currentUser = users.filter(user => user.id === currentId);
  return currentUser[0].name;
};
