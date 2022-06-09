const slugGenerator = require('mongoose-slug-generator/lib/slug-generator');
const { $where } = require('../models/Rooms');
const Room = require('../models/Rooms');
const RESPONSE = require('../response');
const { room } = require('../_constants');
class RoomController {
    //[GET] /:id
    show(req, res, next) {
        const id = req.params.id;
        Room.findById({ _id: id })
            .then((room) =>
                res.status(200).json(RESPONSE.ROOM.GETONEBYID.SUCCESS(room)),
            )
            .catch((error) => {
                res.status(500).json({
                    action: 'find room by id',
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
                res.status(200).json(RESPONSE.ROOM.CREATE.SUCCESS(newRoom));
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
        Room.findOneAndUpdate({ _id }, roomRequest, { new: true })
            .then((room) => {
                res.status(200).json(RESPONSE.ROOM.UPDATE.SUCCESS(room));
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
            .then((rooms) =>
                res
                    .status(200)
                    .json(RESPONSE.ROOM.GETALL_DELETED.SUCCESS(rooms)),
            )
            .catch(next);
    }
    // DELETE /:id
    delete(req, res, next) {
        // console.log(req.params.);
        Room.delete({ _id: req.params.id })
            .then(() => res.status(200).json(RESPONSE.ROOM.DELETE.SUCCESS()))
            .catch(next);
    }
    // [GET] /rooms/store
    store(req, res, next) {
        Room.find({})
            .then((rooms) => {
                res.status(200).json(RESPONSE.ROOM.GETALL.SUCCESS(rooms));
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
        Room.restore({ _id: req.params.id }).then(() =>
            res.status(200).json(RESPONSE.ROOM.RESTORE.SUCCESS()),
        );
    }
    //[DELETE] /rooms/remove/:id
    completeDelete(req, res, next) {
        Room.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json(RESPONSE.ROOM.REMOVE.SUCCESS()))
            .catch(next);
    }
    //[GET] /rooms/findByProvince
    groupByProvince(req, res, next) {
        Room.aggregate([
            {
                $group: {
                    _id: '$address.province',
                    image: { $first: '$image' },
                    total: {
                        $sum: 1,
                    },
                },
            },
        ])
            .then((rooms) => res.status(200).json(rooms))
            .catch(next);
    }
    //[GET] getByProvince /rooms/:province
    getByProvince(req, res, next) {
        const province = req.params.province;
        console.log(province);
        Room.find({ 'address.province': province })
            .then((rooms) => res.status(200).json(rooms))
            .catch(next);
    }
}

module.exports = new RoomController();
