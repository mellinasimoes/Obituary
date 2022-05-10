import { container } from "tsyringe";
import { IPersonRepository } from "../../modules/registerData/repositories/IPersonRepository";
import { PersonRepository } from "../../modules/registerData/repositories/implementations/PersonRepository";
import { IObituaryRepository } from "../../modules/registerData/repositories/IObituaryRepository";
import { ObituaryRepository } from "../../modules/registerData/repositories/implementations/ObituaryRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersTokensRepository } from "../../modules/accounts/repositories/implementations/IUsersTokensRepository";
import { UsersTokensRepository } from "../../../src/modules/accounts/repositories/implementations/UsersTokenRepository";
import "./providers/index";

container.registerSingleton<IPersonRepository>("PersonRepository", PersonRepository);

container.registerSingleton<IObituaryRepository>("ObituaryRepository", ObituaryRepository);

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);

container.registerSingleton<IUsersTokensRepository>("UsersTokensRepository", UsersTokensRepository);
