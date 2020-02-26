const Contacts = require('../models/Contact');
const ContactCategory = require('../models/ContactCategory');
async function fetchContacts(req, res) {
  try {
    const contacts = await Contacts.find({}).sort({ name: 1 });
    res.send(contacts);
  } catch (error) {
    res.send(error);
  }
}

async function createContact(req, res) {
  try {
    const contact = req.body;
    const isValid = await ContactCategory.find({
      category_id: contact.category_id
    });
    if (isValid && isValid.length) {
      const response = await Contacts.create(contact);
      res.send(response);
      return;
    }
    res.send({ Error: 'No Valid Category Id Found' });
  } catch (error) {
    res.send(error);
  }
}
async function deleteContactCategory(req, res) {
  try {
    const query = req.body;
    if (query.delete) {
      const response = await ContactCategory.deleteMany({});

      res.send(response);
      return;
    }
    res.send('Delete Key Missing');
  } catch (error) {
    res.send(error);
  }
}
async function generateCategoryId() {
  const response = await ContactCategory.find({})
    .sort({ category_id: -1 })
    .limit(1);
  if (response && response.length) {
    let category = response[0]['category_id'].split('_');
    return 'C_' + (parseInt(category[1]) + 1 + '').padStart(4, '0');
  }
}
async function createContactCategory(req, res) {
  try {
    const category_id = await generateCategoryId();
    req.body.category_id = category_id ? category_id : 'C_0001';
    const category = req.body;

    const response = await ContactCategory.create(category);

    res.send(response);
  } catch (error) {
    res.send(error);
  }
}
async function fetchContactCategory(req, res) {
  try {
    const response = await ContactCategory.find({});
    res.send(response);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  createContactCategory,
  createContact,
  fetchContacts,
  fetchContactCategory,
  deleteContactCategory
};
