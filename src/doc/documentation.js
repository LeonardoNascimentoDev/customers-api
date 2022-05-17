/**
 *
 * @api {Get} /api/v1/customers/ ListAllCustomers
 * @apiName ListAllCostumers
 * @apiGroup CustomersApi
 * @apiDescription Metodo para retornar todos os clientes
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "data": {[
 *                   "_id": "627ec1eed5fa46e6376fbfb8",
 *                   "name": "Leonardo Nascimento",
 *                   "email": "pagaleve@teste.com",
 *                   "phoneNumber": "41995348888",
 *                   "registerDate": "2022-05-13T17:39:10.913Z",
 *                   "lastModifyDate": "2022-05-13T17:39:10.913Z",
 *                   "postalAddress": {
 *                   "countryCode": "+55",
 *                   "region": "BR",
 *                   "locality": "Curitiba - PR",
 *                   "postalCode": "81910-000",
 *                   "street": "Av. Maring",
 *                   "number": "256",
 *                   },
 *                  ]}
 *               }
 *           }
 *       }
 * @apiSuccess (200) {boolean} Success sucesso ao encontrar todos clientes
 *
 * @apiError CustomersNotFound Os clientes não foram encontradas.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CustomersNotFound"
 *     }
 *
 */

/**
 *
 * @api {Post} /api/v1/customers/save SaveCustomer
 * @apiName SaveCustomer
 * @apiGroup CustomersApi
 * @apiDescription Salvar o cliente
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} name Cliente da CustomersApi
 * @apiParam {String} email Endereço de email fornecido pelo usuário.
 * @apiParam {String{..11}} phoneNumber Telefone de Contato.
 * @apiParam {String} registerDate data de regustro do usuário.
 * @apiParam {String} lastModifyDate data de modificação do usuário.
 * @apiParam {Object} postalAddress Endereço do cliente.
 * @apiParam {Object} postalAddress.countryCode Código do pais.
 * @apiParam {String} postalAddress.region Pais.
 * @apiParam {String} postalAddress.locality Cidade, estado.
 * @apiParam {String} postalAddress.postalCode Código postal, CEP.
 * @apiParam {String} postalAddress.street Rua.
 * @apiParam {String} postalAddress.number Número.
 * @apiSuccess (200) {Boolean} true Retorna Verdadeiro se o cliente não estiver criado.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *           "data": {[
 *                   "name": "Leonardo Nascimento",
 *                   "email": "pagaleve@teste.com",
 *                   "phoneNumber": "41995348888",
 *                   "registerDate": "2022-05-13T17:39:10.913Z",
 *                   "lastModifyDate": "2022-05-13T17:39:10.913Z",
 *                   "postalAddress": {
 *                   "countryCode": "+55",
 *                   "region": "BR",
 *                   "locality": "Curitiba - PR",
 *                   "postalCode": "81910-000",
 *                   "street": "Av. Maring",
 *                   "number": "256",
 *                   },
 *                  ]}
 *               }
 *           }
 *       }
 *
 * @apiError InvalidCustomer Cliente com o mesmo email já cadastrado!.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "InvalidCustomer"
 *     }
 */

/**
 *
 * @api {Get} /api/v1/customers/:id ListCustomer
 * @apiName ListCustomer
 * @apiGroup CustomersApi
 * @apiDescription Metodo para retornar dados do cliente específico.
 * @apiVersion 1.0.0
 * @apiParam  {String} Id do cliente
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "data": {
 *                   "_id": "627ec1eed5fa46e6376fbfb8",
 *                   "name": "Leonardo Nascimento",
 *                   "email": "pagaleve@teste.com",
 *                   "phoneNumber": "41995348888",
 *                   "registerDate": "2022-05-12T13:25:17.560Z",
 *                   "lastModifyDate": "2022-05-12T13:25:17.560Z",
 *                   "postalAddress": {
 *                   "countryCode": "+55",
 *                   "region": "BR",
 *                   "locality": "Curitiba - PR",
 *                   "postalCode": "81910-000",
 *                   "street": "Av. Maringá"
 *                   "number": "256"
 *                   },
 *                  }
 *               }
 *           }
 *       }
 * @apiSuccess (200) {boolean} Success sucesso ao encontrar o cliente
 *
 * @apiError CustomerNotFound O cliente não foi encontrada.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CustomerNotFound"
 *     }
 *
 */

/**
 *
 * @api {Put} /api/v1/customers/:id UpdateCustomer
 * @apiName UpdateCustomer
 * @apiGroup CustomersApi
 * @apiDescription Metodo para atualizar os dados do cliente.
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} name Cliente da CustomersApi
 * @apiParam {String} email Endereço de email fornecido pelo usuário.
 * @apiParam {String{..11}} phoneNumber Telefone de Contato.
 * @apiParam {String} registerDate data de regustro do usuário.
 * @apiParam {String} lastModifyDate data de modificação do usuário.
 * @apiParam {Object} postalAddress Endereço do cliente.
 * @apiParam {Object} postalAddress.countryCode Código do pais.
 * @apiParam {String} postalAddress.region Pais.
 * @apiParam {String} postalAddress.locality Cidade, estado.
 * @apiParam {String} postalAddress.postalCode Código postal, CEP.
 * @apiParam {String} postalAddress.street Rua.
 * @apiParam {String} postalAddress.number Número.
 * @apiSuccess (200) {Boolean} true Retorna Verdadeiro se o cliente não estiver criado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "data": {
 *                   "_id": "627ec1eed5fa46e6376fbfb8",
 *                   "name": "Leonardo Nascimento",
 *                   "email": "pagaleve@teste.com",
 *                   "phoneNumber": "41995348888",
 *                   "registerDate": "2022-05-12T13:25:17.560Z",
 *                   "lastModifyDate": "2022-05-12T13:25:17.560Z",
 *                   "postalAddress": {
 *                   "countryCode": "+55",
 *                   "region": "BR",
 *                   "locality": "Curitiba - PR",
 *                   "postalCode": "81910-000",
 *                   "street": "Av. Maringá"
 *                   "number": "256"
 *                   },
 *                  }
 *               }
 *           }
 *       }
 * @apiSuccess (200) {boolean} Success sucesso ao atualizar o cliente
 *
 * @apiError CustomerNotFound Erro ao atualizar o cliente.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CustomerNotFound"
 *     }
 *
 */

/**
 *
 * @api {Get} /api/v1/customers/:id SearchCustomer
 * @apiName SearchCustomer
 * @apiGroup CustomersApi
 * @apiDescription Metodo filtrar os cliente por query params.
 * @apiVersion 1.0.0
 * @apiParam  {String} Id do cliente
 * @apiParam  {String} Name do cliente
 * @apiParam  {String} Email do cliente
 * @apiParam  {String} phoneNumber do cliente
 * @apiParam  {String} registerDate do cliente
 * @apiParam  {String} lastModifyDate do cliente
 * @apiParam  {String} postalAddress.countryCode do cliente
 * @apiParam  {String} postalAddress.region do cliente
 * @apiParam  {String} postalAddress.locality do cliente
 * @apiParam  {String} postalAddress.postalCode do cliente
 * @apiParam  {String} postalAddress.street do cliente
 * @apiParam  {String} postalAddress.number do cliente
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "data": {
 *                   "_id": "627ec1eed5fa46e6376fbfb8",
 *                   "name": "Leonardo Nascimento",
 *                   "email": "pagaleve@teste.com",
 *                   "phoneNumber": "41995348888",
 *                   "registerDate": "2022-05-12T13:25:17.560Z",
 *                   "lastModifyDate": "2022-05-12T13:25:17.560Z",
 *                   "postalAddress": {
 *                   "countryCode": "+55",
 *                   "region": "BR",
 *                   "locality": "Curitiba - PR",
 *                   "postalCode": "81910-000",
 *                   "street": "Av. Maringá"
 *                   "number": "256"
 *                   },
 *                  }
 *               }
 *           }
 *       }
 * @apiSuccess (200) {boolean} Success sucesso ao encontrar o cliente
 *
 * @apiError CustomerNotFound O cliente não foi encontrada.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CustomerNotFound"
 *     }
 *
 */

/**
 *
 * @api {Delete} /api/v1/customers/:id DeleteCustomer
 * @apiName DeleteCustomer
 * @apiGroup CustomersApi
 * @apiDescription Metodo para deletar o cliente por ID.
 * @apiVersion 1.0.0
 * @apiParam  {String} Id do cliente
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "data": {
 *                   "_id": "627ec1eed5fa46e6376fbfb8",
 *                   "name": "Leonardo Nascimento",
 *                   "email": "pagaleve@teste.com",
 *                   "phoneNumber": "41995348888",
 *                   "registerDate": "2022-05-12T13:25:17.560Z",
 *                   "lastModifyDate": "2022-05-12T13:25:17.560Z",
 *                   "postalAddress": {
 *                   "countryCode": "+55",
 *                   "region": "BR",
 *                   "locality": "Curitiba - PR",
 *                   "postalCode": "81910-000",
 *                   "street": "Av. Maringá"
 *                   "number": "256"
 *                   },
 *                  }
 *               }
 *           }
 *       }
 * @apiSuccess (200) {boolean} Success sucesso ao deletar o cliente
 *
 * @apiError CustomerNotFound O cliente não foi encontrada.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CustomerNotFound"
 *     }
 *
 */
