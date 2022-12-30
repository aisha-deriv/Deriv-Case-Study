"use strict";

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		async hello(ctx) {
			const payload = 'hello from greetuing'+(this.broker.nodeID);
			const number = await ctx.call("trader.random");
			ctx.emit("hello.called", {payload, number});
			return {payload,number};
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {
// if we our service to listen to events we will put them here
	},

	/**
	 * Methods
	 */
	methods: {
// private functions only availabe inside 
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {
//to establish connection with db
	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {
//to gracefully close all connection  linked
	}
};
