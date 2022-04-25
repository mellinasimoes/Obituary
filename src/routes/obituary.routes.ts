import { Router } from 'express';
import { ensureAuthenticated } from '../middlerwares/ensureAuthenticated';
import { CreateObituaryController } from '../modules/registerData/obituaryUseCases/createObituary/CreateObituaryController';
import { FindObituaryByFinalGraveNumberController } from '../modules/registerData/obituaryUseCases/findObituaryByfinalGraveNumber/FindObituaryByFinalGraveNumberController';
import { ListAllObituaryAndOrderByFinalGraveNumberController } from '../modules/registerData/obituaryUseCases/listAllObituaryAndOrderByFinalGraveNumber/ListAllObituaryAndOrderByFinalGraveNumberController';
import { ListObituaryBetweenDateController } from '../modules/registerData/obituaryUseCases/listObituaryBetweenDate/ListObituaryBetweenDateController';
import { FindObituaryByPersonIdController } from '../modules/registerData/obituaryUseCases/findObituaryByPersonId/FindObituaryByPersonIdController';


const obituaryRoutes = Router ();

const createObituaryController=new CreateObituaryController();
const findObituaryByFinalGraveNumberController = new FindObituaryByFinalGraveNumberController();
const findObituaryByPersonIdController = new FindObituaryByPersonIdController();
const listAllObituaryAndOrderByFinalGraveNumberController= new ListAllObituaryAndOrderByFinalGraveNumberController();
const listObituaryBetweenDateController= new ListObituaryBetweenDateController();


obituaryRoutes.use(ensureAuthenticated);

obituaryRoutes.post("/", createObituaryController.handle);

obituaryRoutes.get ("/findbyfinalgravenumber", findObituaryByFinalGraveNumberController.handle);

obituaryRoutes.get ("/findobituarybypersonid", findObituaryByPersonIdController.handle);

obituaryRoutes.get ("/listallobituaryandorderbyfinalgravenumber", listAllObituaryAndOrderByFinalGraveNumberController.handle);

obituaryRoutes.get ("/listobituarybetweendate", listObituaryBetweenDateController.handle);

export { obituaryRoutes };




