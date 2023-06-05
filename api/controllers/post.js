import { db } from '../db.js';
import jwt from "jsonwebtoken";

export const getComments = (req, res) => {
  const idsehen = req.body.idsehen;
  // const idsehen = '01';
  const q = "SELECT l.login, c.text, c.da FROM comment c JOIN login l ON c.logid = l.logid  WHERE c.idsehen = ?";
  //SELECT l.login, c.text, c.idsehen, c.da FROM comment c JOIN login l ON c.logid = l.logid;
  db.query(q, [idsehen], (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(data);
  });
};



export const getComment = (req, res) => {
  const id = req.params.id;

  const q = "SELECT l.login, c.text, c.da FROM comment c JOIN login l ON c.logid = l.logid  WHERE c.idsehen = ?";

  //для одного коммента ниже
  //const q = "SELECT l.login, c.text, c.idsehen, c.da FROM comment c JOIN login l ON c.logid = l.logid WHERE c.id = ?";

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    console.log(data);
    if (data.length === 0) {
      return res.status(404).json("Comment not found");
    }

    res.status(200).json(data);
  });
};




export const addComment = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  const values1 =[
    req.body.login
  ]

  let test;
  const t = 'SELECT * FROM login WHERE login = ?';
  db.query(t, [values1], (err, data) =>{
    if(err)return res.status(500).json(err);
    test = data[0].logid;

    const q = "INSERT INTO comment (idsehen, text, da, logid) VALUES (?)";

 

    const values = [
      req.body.idsehen, 
      req.body.text, 
      req.body.da,  
      test
    ]

  db.query(q, [values], (err) => {
    if (err) return res.status(404).json(err);
    res.status(200).json("Comment has been added");
  });
  })

};






export const deleteComment = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const id = req.params.id;

    const q = "DELETE FROM comment WHERE id = ? AND `logid` = ?";

  db.query(q, [id, userInfo.login], (err, data) => {
    if (err) return res.status(403).json("You can delete only your comment!");

  
    res.status(200).json("Comment has been deleted");
  });

  });
};






export const updateComment = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

  const id = req.params.id;
  const { text } = req.body;

  const q = "UPDATE comment SET text = ? WHERE `id` = ? AND `logid` = ?";

  db.query(q, [text, id], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.affectedRows === 0) {
      return res.status(404).json("Comment not found");
    }

    res.status(200).json("Comment has been updated");
  });
  });
};