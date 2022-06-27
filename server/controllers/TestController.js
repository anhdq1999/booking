// const Province = require('./../models/Provinces');
// const District = require('./../models/Districts')
// const Ward = require('./../models/Wards')
// const Room = require('./../models/Rooms');

// const randomNumber = (n) => {
//     return Math.floor(Math.random() * n);
// }
// const formatData = async () => {

//     Room.find({})
//         .then((rooms) => {
//             rooms.forEach(async(room)=>{
//                 let province = await Province.aggregate([{$sample:1}])
//                 let district =await District.find({parent_code:province.code}).aggregate([{$sample:1}])
//                 let ward =
//             })
//         });
// }


// export const test = {
//     formatData
// }