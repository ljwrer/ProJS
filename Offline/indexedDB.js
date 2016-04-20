/**
 * Created by Ray on 2016/4/20.
 */
;const indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB ||window.webkitIndexedDB
let database
const init=new Promise( (resolve, reject)=> {
    const request=indexedDB.open("admin",1)
    request.onerror=event=> {
        console.log(event.target.errorCode)
        reject(event.target.errorCode)
    };
    request.onsuccess=event=> {
        database=event.target.result
    }
    request.onupgradeneeded=event=> {
        database=event.target.result
        console.log(database)
        var store=database.createObjectStore("users",{keypath:"username"})
        resolve(store)
    }
});
// const setVersion=()=> {
//     return new Promise((resolve,reject)=>{
//         if (database.version != "1.0"){
//             const request = database.setVersion("1.0")
//             request.onerror=event=>{
//                 console.log("Something bad happened while trying to set version: " +
//                     event.target.errorCode)
//                 reject(event.target.errorCode)
//             };
//             request.onsuccess = event=>{
//                 console.log("Database initialization complete. Database name: " + database.name +
//                     ", Version: " + database.version)
//             };
//             request.onupgradeneeded=event=> {
//                 database=event.target.result
//                 var store=database.createObjectStore("users",{keypath:"username"})
//                 return store
//             }
//         } else {
//             console.log("Database already initialized. Database name: " + database.name +
//                 ", Version: " + database.version);
//             resolve(2)
//         }
//     })
//
// };
init.then(store=> {
    console.log(store)
    const user = {
        username: "007",
        firstName: "James",
        lastName: "Bond",
        password: "foo"
    }
    const requests=[]
    const users=[]
    users.push(user)
    let i=0
    const len=users.length
    while (i<len){
        let request=store.add(users[i++])
        request.onsuccess=()=> {

        }
        request.onerror=event=> {
            reject({
                code:event.errorCode,
                user:users[i-1]
            })
        }
        requests.push(request)
    }
})