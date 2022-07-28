let success = false;
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      }
      else{
          reject('Failed !!!')
      }
    });
  });
}

// function onFullfield(users) {
//   console.log(users);
// }
// function onRejected(error) {
//   console.log(error);
// }
const promise = getUsers();
// console.log(promise);
// promise.then((users) => console.log(users),
// (error) => console.log(error)
// );

promise.catch((error) => {
    console.log(error);
  });
