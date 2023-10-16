var addresseers = [];

function createAddresseer(addresseer) {
  const addresseerId = Math.floor(Math.random() * 1000000) + 1;
  addresseer.addresseerId = addresseerId;
  
  addresseers.push(addresseer);
}

function readAddresseers() {
  return addresseers;
}

function findAddresseerById(addresseerId) {
  return addresseers.find(addresseer => addresseer.addresseerId === addresseerId);
}

function updateAddresseerById(addresseerId, addresseer) {
  const currentAddresseer = findAddresseerById(addresseerId);
  if (currentAddresseer) {
    Object.assign(currentAddresseer, addresseer);
  }
}

function deleteAddresseerById(addresseerId) {
  addresseers = addresseers.filter(addresseer => addresseer.addresseerId !== addresseerId);
}

export { createAddresseer, readAddresseers, findAddresseerById, updateAddresseerById, deleteAddresseerById };
