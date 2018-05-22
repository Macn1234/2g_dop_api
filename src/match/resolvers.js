import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allMatch: (_) =>
			getRequest(URL, ''),
		matchById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		matchByUser: (_, { id }) =>
			generalRequest(`${URL}/usuario/${id}`, 'GET'),
		acceptedByUser: (_, { id }) =>
			generalRequest(`${URL}/aceptados/usuario/${id}`, 'GET'),
		rejectedByUser: (_, { id }) =>
			generalRequest(`${URL}/rechazados/usuario/${id}`, 'GET'),
	},
	Mutation: {
		createMatch: (_, { match }) =>
			generalRequest(`${URL}/`, 'POST', match),
		deleteMatch: (_, { id }) =>
			generalRequest(`${URL}/`, 'DELETE', id),
		filtrateListPossibles: (_, {id, listUsers }) =>
			generalRequest(`${URL}/posibles/${id}`, 'POST', listUsers)
	}
};

export default resolvers;
