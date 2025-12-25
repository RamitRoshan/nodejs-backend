// const Contact = require('../models/contactportal-model');
// const {contactValidationSchema} = require('../validators/contactportal-validator');

// const contactPortalCltr = {};


 

// module.exports = contactPortalCltr;




const Contact = require('../models/contactportal-model');
const { contactValidationSchema } = require('../validators/contactportal-validator');

const contactPortalCntrl = {};


//    PUBLIC CONTENT APIs
 

// Home page
contactPortalCntrl.home = (req, res) => {
  res.json(require('../../data/home.json'));
};

// About page
contactPortalCntrl.about = (req, res) => {
  res.json(require('../../data/about.json'));
};

// Services page
contactPortalCntrl.services = (req, res) => {
  res.json(require('../../data/services.json'));
};

// Contact page content
contactPortalCntrl.contactPage = (req, res) => {
  res.json(require('../../data/contact.json'));
};

 
//    CONTACT FORM SUBMIT
 
contactPortalCntrl.submitContact = async (req, res) => {
  const body = req.body;

  const { error, value } = contactValidationSchema.validate(body, {
    abortEarly: false
  });

  if (error) {
    return res.status(400).json(error);
  }

  try {
    const contact = new Contact(value);
    await contact.save();

    res.json({
      message: "Thanks for contacting us! We will get back to you soon."
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
 

// ADMIN APIs
// Admin login (simple secret check)
contactPortalCntrl.adminLogin = (req, res) => {
  const { secretKey } = req.body;

  if (secretKey !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Invalid secret key" });
  }

  res.json({ message: "Admin login successful" });
};

// Get all contact submissions (protected)
contactPortalCntrl.adminContacts = async (req, res) => {
  const adminKey = req.headers['admin-secret'];

  if (adminKey !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = contactPortalCntrl;
