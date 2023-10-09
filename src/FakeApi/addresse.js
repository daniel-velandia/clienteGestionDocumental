const addresses = [];

function CreateAddresseApi({ identification, name, lastName, email, phone, charge, area }) {
  const addresseeId = Math.floor(Math.random() * 1000000);
  addresses.push({ addresseeId, identification, name, lastName, email, phone, charge, area });
}

function GetAddresse({ id }) {
  return addresses.find((address) => address.addresseeId === id);
}

function UpdateAddresse({ id, identification, name, lastName, email, phone, charge, area }) {
  const address = addresses.find((address) => address.addresseeId === id);
  if (address) {
    address.identification = identification;
    address.name = name;
    address.lastName = lastName;
    address.email = email;
    address.phone = phone;
    address.charge = charge;
    address.area = area;
    addresses[id] = address;
  }
}

function DeleteAddresse({ id }) {
  const index = addresses.findIndex((address) => address.addresseeId === id);
  if (index !== -1) {
    addresses.splice(index, 1);
  }
}

function GetAllAddresses() {
  return addresses;
}

export { CreateAddresseApi, GetAddresse, UpdateAddresse, DeleteAddresse, GetAllAddresses }