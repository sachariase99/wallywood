import CartLine from '../Models/cartline.model.js'
import { QueryParamsHandle } from '../Middleware/helpers.js'
import { getUserFromToken } from '../Middleware/auth.js'
import Poster from '../Models/poster.model.js'

Poster.hasMany(CartLine)
CartLine.belongsTo(Poster)

/**
 * Controller for UserGroup Actions
 */
export default class CartLineController {

	/**
	 * Method List
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	list = async (req, res) => {
		// Henter user id fra token
		const user_id = await getUserFromToken(req, res)

		// Indhenter parametre fra request objekt
		const qp = QueryParamsHandle(req, 'id, poster_id')

		if(user_id) {
			try {
				// Eksekverer sequelize metode med management values
				const result = await CartLine.findAll({
					attributes: qp.attributes,
					order: [qp.sort_key],
					limit: qp.limit,
					where: { user_id: user_id },
					include: {
						model: Poster,
						as: 'poster',
						attributes: ['id', 'name', 'image', 'price']
					}
				})
				// Udskriver resultat i json format
				res.json(result)			
			} catch (error) {
				res.status(418).send({
					message: `Could not get group list: ${error}`
				})												
			}
		} else {
			res.status(403).send({
				message: 'Wrong parameter values'
			})
		}
	}

	/**
	 * Method Details
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	details = async (req, res) => {
		// Destructure assignment af id. 
		const { id } = req.params || 0

		if(id) {
			try {
				// Eksekverer sequelize metode med attributter og where clause
				const result = await Groups.findOne({
					attributes: ['id', 'name', 'description', 'is_active', 'createdAt', 'updatedAt'],
					where: { id: id }
				})
				// Udskriver resultat i json format
				res.json(result)
			} catch (error) {
				res.status(418).send({
					message: `Could not get group details: ${error}`
				})					
			}	
		} else {
			res.status(403).send({
				message: 'Wrong parameter values'
			})
		}
	}

	/**
	 * Method Create
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	create = async (req, res) => {
		// Henter user id fra token
		const user_id = await getUserFromToken(req, res)
		// Destructure assignment af form data fra request body
		const { poster_id, quantity } = req.body;
		
		// Tjekker felt data
		if(user_id && poster_id && quantity) {
			try {
				req.body.user_id = user_id
				// Opretter record
				const model = await CartLine.create(req.body)
				// Sender nyt id som json object
				res.json({
					message: `Record created`,
					newId: model.id
				})				
			} catch (error) {
				res.status(418).send({
					message: `Could not create record: ${error}`
				})																						
			}
		} else {
			res.status(403).send({
				message: 'Wrong parameter values'
			})
		}
	}

	/**
	 * Method Update
	 * @param {*} req 
	 * @param {*} res 
	 */
	update = async (req, res) => {
		// Henter user id fra token
		const user_id = await getUserFromToken(req, res)
		// Destructure assignment af form data fra request body
		const { poster_id, quantity } = req.body;

		// Tjekker felt data
		if(user_id && poster_id && quantity) {
			try {
				// Opretter record
				const model = await CartLine.update(req.body, {
					where: { user_id: user_id, poster_id: poster_id }
				})
				// Sender nyt id som json object
				res.json({ 
					message: 'Record updated' 
				})				
			} catch (error) {
				res.status(418).send({
					message: `Could not update record: ${error}`
				})																										
			}
		} else {
			res.status(403).send({
				message: 'Wrong parameter values'
			})
		}	
	}

	/**
	 * Method Remove
	 * @param {object} req Request Object
	 * @param {object} res Response Object
	 */	
	remove = async (req, res) => {
		const { id } = req.params

		if(id) {
			try {
				await CartLine.destroy({ 
					where: { id: id }
				})
				res.status(200).send({
					message: `Record deleted`
				})
			}
			catch(err) {
				res.status(418).send({
					message: `Could not delete record: ${error}`
				})																										
			}	
		} else {
			res.status(403).send({
				message: 'Wrong parameter values'
			})
		}
	}	
}