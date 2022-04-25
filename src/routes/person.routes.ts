import { Router } from "express";
import { ensureAuthenticated } from "../middlerwares/ensureAuthenticated";
import { CreatePersonController } from "../modules/registerData/personUseCases/createPerson/CreatePersonController";
import { ListPersonByNameController } from "../modules/registerData/personUseCases/listPersonByName/ListPersonBynameController";
import { ListPersonByMothersNameController } from "../modules/registerData/personUseCases/listPersonByMothersName /ListPersonByMothersNameController";
import { ListPersonController } from "../modules/registerData/personUseCases/listAllPerson/ListAllPersonController";


const personRoutes = Router(); 

const createPersonController= new CreatePersonController();
const listPersonByNameController= new ListPersonByNameController();
const listPersonByMothersNameController= new ListPersonByMothersNameController();
const listPersonController= new ListPersonController();

personRoutes.use(ensureAuthenticated); 

personRoutes.post ("/", createPersonController.handle);

personRoutes.get ("/findpersonbyname", listPersonByNameController.handle);

personRoutes.get ("/findpersonbymothersname", listPersonByMothersNameController.handle);

personRoutes.get ("/listall", listPersonController.handle);

export { personRoutes };
