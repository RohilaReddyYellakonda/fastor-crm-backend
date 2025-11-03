import Employee from "../models/Employee.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await Employee.findOne({ email });
    if (existing) return res.status(400).json({ message: "Employee already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const employee = new Employee({ name, email, password: hashed });
    await employee.save();

    res.status(201).json({ message: "Employee registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;
    const employee = await Employee.findOne({ email });
    if (!employee) return res.status(400).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, employee.password);
    if (!valid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
