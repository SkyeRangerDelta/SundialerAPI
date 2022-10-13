// --- Sundialer API Router Type ---

import {Router} from "express";

export interface SAPIRouter extends Router {
    name: string
}