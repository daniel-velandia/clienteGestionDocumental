var addresseers = [];

async function createAddresseer(addresseer) {
  const addresseerId = Math.floor(Math.random() * 1000000) + 1;
  addresseer.addresseerId = addresseerId.toString();
  addresseers.push(addresseer);
}

async function readAddresseers() {
  return addresseers;
}

async function findAddresseerById(addresseerId) {
  return addresseers.find(addresseer => addresseer.addresseerId === addresseerId);
}

async function updateAddresseerById(addresseerId, addresseer) {
  const currentAddresseer = await findAddresseerById(addresseerId);
  if (currentAddresseer) {
    Object.assign(currentAddresseer, addresseer);
  }
}

function deleteAddresseerById(addresseerId) {
  addresseers = addresseers.filter(addresseer => addresseer.addresseerId !== addresseerId);
}

export { createAddresseer, readAddresseers, findAddresseerById, updateAddresseerById, deleteAddresseerById };
