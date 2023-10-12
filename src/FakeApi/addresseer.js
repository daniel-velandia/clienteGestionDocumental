import { AddresseerDb } from "../models/Addresseer";

let addresseers = [];

function createAddresseer(addresseer) {
  const addresseerId = Math.floor(Math.random() * 1000000) + 1;
  const addresseerDb = new AddresseerDb(
    addresseerId, 
    addresseer.identification,
    addresseer.name,
    addresseer.lastName,
    addresseer.email,
    addresseer.phone,
    addresseer.charge,
    addresseer.area);
  addresseers.push(addresseerDb);
}

function readAddresseers() {
  return addresseers;
}

function findAddresseerById(addresseerId) {
  return addresseers.find(addresseer => addresseer.addresseerId === addresseerId);
}

function updateAddresseerById(addresseerId, addresseer) {
  const addresseerDb = findAddresseerById(addresseerId);
  if (addresseerDb) {
    Object.assign(addresseerDb, addresseer);
  }
}

function deleteAddresseerById(addresseerId) {
  addresseers = addresseers.filter(addresseer => addresseer.addresseerId !== addresseerId);
}

export { createAddresseer, readAddresseers, findAddresseerById, updateAddresseerById, deleteAddresseerById };
