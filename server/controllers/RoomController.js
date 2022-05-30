const slugGenerator = require('mongoose-slug-generator/lib/slug-generator');
const Room = require('../models/Rooms');
const User = require('../models/Users');

class RoomController {
    //[GET] /:id
    show(req, res, next) {
        const id = req.params.id;
        Room.findById({ _id: id })
            .then((room) =>
                res.status(200).json({
                    action: 'find order by id',
                    success: true,
                    message: 'find successfully',
                    data: room,
                }),
            )
            .catch((error) => {
                res.status(500).json({
                    action: 'find order by id',
                    success: false,
                    message: `Internal Server Error : ${error}`,
                    data: null,
                });
            });
    }

    // POST /
    create(req, res, next) {
        const roomRequest = req.body;
        const newRoom = new Room(roomRequest);
        newRoom
            .save()
            .then((newRoom) => {
                res.status(200).json({
                    action: 'create room',
                    success: true,
                    message: 'create room successfully',
                    data: newRoom,
                });
            })
            .catch((error) => {
                res.status(500).json({
                    action: 'create room',
                    success: false,
                    message: `Internal Server Error : ${error}`,
                    data: null,
                });
            });
    }

    // PUT /:id
    update(req, res, next) {
        const _id = req.params.id;
        const roomRequest = req.body;
        Room.findOneAndUpdate({_id}, roomRequest,{new:true},)
            .then((room) => {
                res.status(200).json({
                    action: 'update room',
                    success: true,
                    message: 'update room successfully',
                    data: room,
                });
            })
            .catch((error) => {
                res.status(500).json({
                    action: 'create room',
                    success: false,
                    message: `Internal Server Error : ${error}`,
                    data: null,
                });
            });
    }
    //[GET] /rooms/garbage
    garbage(req, res, next) {
        Room.findDeleted({})
            .then((rooms) => res.json(rooms))
            .catch(next);
    }
    // DELETE /:id
    delete(req, res, next) {
        // console.log(req.params.);
        Room.delete({ _id: req.params.id })
            .then(() =>
                res.status(200).json({
                    success: true,
                    message: 'Delete room succesful',
                }),
            )
            .catch(next);
    }
    // [GET] /rooms/store
    store(req, res, next) {
        Room.find({})
            .then((rooms) => {
                res.status(200).json({
                    action: 'Get all room',
                    success: true,
                    message: 'Get all room successfully',
                    data: rooms,
                });
            })
            .catch((error) => {
                res.status(500).json({
                    action: 'Get all room',
                    success: false,
                    message: `Internal Server Error : ${error}`,
                    data: null,
                });
            });
    }
    //[PUT] /users/restore/:id
    restore(req, res, next) {
        Room.restore({ _id: req.params.id })
            .then(() =>
                res.status(200).json({
                    action: 'restore room',
                    success: true,
                    message: 'Restore room successful ',
                }),
            );
    }
    //[DELETE] /rooms/remove/:id
    completeDelete(req, res, next) {
        Room.deleteOne({ _id: req.params.id })
            .then(() =>
                res.status(200).json({
                    action: 'remove room',
                    success: true,
                    message: 'Remove room successful ',
                })
            )
            .catch(next);
    }
}

module.exports = new RoomController();
