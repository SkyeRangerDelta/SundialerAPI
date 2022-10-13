// -- test

//Imports
import express, {Router} from 'express';
import statusControl from '../controllers/test';
import {SAPIRouter} from "../types/SAPIRouter";

//Functions
const router = express.Router();

router.get('/', statusControl.status);

export const rt = router({
    name: 'test'
}) as SAPIRouter;