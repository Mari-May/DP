/*import * as db from '../db.js';*/
import {db} from '../db.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = (req, res) => {
  const q = "SELECT * FROM login WHERE login = ? OR email = ?";
  
  db.query(q, [req.body.login, req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");
  
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO login (`login`, `password`, `email`) VALUES (?)";
    const values = [
      req.body.login,
      hash,  
      req.body.email,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created.");
    });
  });
};   

export const login = (req, res) => {
    //CHECK USER
  
    const q = "SELECT * FROM login WHERE login = ?";
  
    db.query(q, [req.body.login], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
      //Check password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
  
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");
  
      const token = jwt.sign({logid: data[0].logid }, "jwtkey");
      const { password, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
  };

export const logout = (req, res)=>{
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")

  
};
