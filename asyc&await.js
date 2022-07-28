let success = false;
function get_users() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "Abhi", email: "abhishek123@gmail.com" },
          { username: "Amit", email: "amit34@gmail.com" },
        ]);
      } else {
        reject("Failed to list users");
      }
    }, 1000);
  });
}

// function onFullfield(users){
//   console.log(users);
// }

function onRejected(error){
  console.log(error);
}

const promise = get_users();
// promise.then(onFullfield,onRejected);
promise.catch(onRejected);