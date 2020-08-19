const {
  imports: { mongoose }
} = require('./imports');
const ContactCategorySchema = mongoose.Schema({
  category_name: String,
  category_id: { type: String, require: true }
});
const ContactCategory = mongoose.model(
  'contact_category',
  ContactCategorySchema
);
module.exports = ContactCategory;
