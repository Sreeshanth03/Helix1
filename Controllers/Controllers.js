const { User_Model } = require("../Models/Models.js");

async function CreateUserForm(req, res) {
  try {
    const { name, mobile, email, address, country } = req.body;

    
    if (!name || !mobile || !email || !address || !country) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //  Check for duplicate email or mobile
    const existingUser = await User_Model.findOne({
      $or: [{ email: email }, { mobile: mobile }],
    });

    if (existingUser) {
      let duplicateField =
        existingUser.email === email
          ? "Email already exists"
          : "Mobile number already exists";
      return res.status(409).json({ message: duplicateField });
    }

    //  Create new user only if no duplicates
    const Data = await User_Model.create({
      name: name,
      mobile: mobile,
      email: email,
      address: address,
      country: country,
    });

    res.status(201).json({ message: "User created successfully", data: Data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function GetAll(req, res) {
  try {
    const users = await User_Model.find();
    res
      .status(200)
      .json({ message: "Users fetched Successfully", data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { CreateUserForm, GetAll };
