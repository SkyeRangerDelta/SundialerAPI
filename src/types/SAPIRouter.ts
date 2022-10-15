// --- Sundialer API Router Type ---

import {Router} from "express";

export class SAPIRouter {
    name: string;
    router: Router;

    constructor(name: string, router = Router()) {
        this.name = name;
        this.router = router;
    }
}

