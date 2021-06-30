/*
 * @Author: yehuozhili
 * @Date: 2021-06-29 14:00:29
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-06-29 14:46:51
 * @FilePath: \my-app\src\routes\hei\_api.ts
 */
import type { Request } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

const base = 'https://api.svelte.dev';
export async function api(request: Request<Locals>, resource: string, data?: {}) {
	// user must have a cookie set
	if (!request.locals.userid) {
		return { status: 401 };
	}
	console.log('cccc', resource, data);
	const res = await fetch(`${base}/${resource}`, {
		method: request.method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
	// const res = {
	// 	213: 35325,
	// 	jjj: 'sadasdas'
	// };
	// if the request came from a <form> submission, the browser's default
	// behaviour is to show the URL corresponding to the form's "action"
	// attribute. in those cases, we want to redirect them back to the
	// /todos page, rather than showing the response
	// if (res.ok && request.method !== 'GET' && request.headers.accept !== 'application/json') {
	// 	return {
	// 		status: 303,
	// 		headers: {
	// 			location: '/todos'
	// 		}
	// 	};
	// }

	// return {
	// 	status: 200,
	// 	body: res
	// };

	return {
		status: res.status,
		body: await res.json()
	};
}
