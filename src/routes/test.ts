// -- test

//Imports
import express from 'express';
import statusControl from '../controllers/test';

//Functions
const router = express.Router();

router.get('/ping', statusControl.status);

export = router;