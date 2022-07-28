function get_users(userId,callback){
    console.log('Get user from database');
    setTimeout(()=>{
        callback({
            userId:userId,
            userName: 'john'
        })
    },1000)
}

function getServices(user){
    console.log();
}