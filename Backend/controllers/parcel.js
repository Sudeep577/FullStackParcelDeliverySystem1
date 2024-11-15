const Parcel = require("../models/Parcel");

// ADD PARCEL
const createParcel = async (req, res) => {
    try {
        const newParcel = new Parcel(req.body);
        const parcel = await newParcel.save();
        res.status(201).json(parcel);
    } catch (error) {
        res.status(500).json(error);
    }
}

// GET ALL PARCELS
const getAllParcels = async (req, res) => {
    try {
        const parcels = await Parcel.find().sort({ createdAt: -1 });
        res.status(200).json(parcels);
    } catch (error) {
        res.status(500).json(error);
    }
}

// UPDATE PARCEL
const updateParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(parcel);
    } catch (error) {
        res.status(500).json(error);
    }
}

// GET ONE PARCEL
const getOneParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id);
        res.status(200).json(parcel);
    } catch (error) {
        res.status(500).json(error);
    }
}

// GET USER'S PARCELS
const getUserParcel = async (req, res) => {
    try {
        const parcels = await Parcel.find({ senderemail: req.body.email }).sort({ createdAt: -1 });
        res.status(200).json(parcels);
    } catch (error) {
        res.status(500).json(error);
    }
}

// DELETE PARCEL
const deleteParcel = async (req, res) => {
    try {
        await Parcel.findByIdAndDelete(req.params.id);
        res.status(200).json('Parcel has been deleted successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { deleteParcel, getUserParcel, getOneParcel, updateParcel, getAllParcels, createParcel }
