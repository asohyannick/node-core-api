import { Router } from "express";
import {
    createRole,
    deleteRole,
    getAllRoles,
    getRole,
    updateRole
} from '../../controllers/role-controllers/role.controller';

const roleRoute = () => {
    const router = Router();

    router.post('/role', createRole);

    router.get('/role', getAllRoles);

    router.get('/role', getRole);

    router.get('/roles/:id', getRole);

    router.put('/roles/:id', updateRole);

    router.delete('/roles/:id', deleteRole);

    return router;
}

export {
    roleRoute
};
