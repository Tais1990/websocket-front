const config = (await import(`../../config.js`)).default(process.env.NEXT_PUBLIC_NODE_ENV)

const api = {
    urlServer() {
        return `http://${config.api.host}:${config.api.port}/api/`
    },
    async get(url) {
        try {
            const response = await fetch(`${this.urlServer()}${url}`, { method: 'GET' });
            // TODO Реализовать обработку ошибко разных с сервера, а не только то, что сервер отключен
            const body = response.json();
            return body;
        } catch(error) {
            throw error;
        }
    },
    async post(url, form) {
        try {
            const response = await fetch(`${this.urlServer()}${url}`, {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw (await response.json()).detail || 'Error in request'
            }
            return  await response.json()
        } catch(error) {
            throw error;
        }
    },
    async put(url, form) {
        try {
            const response = await fetch(`${this.urlServer()}${url}`, {
                method: 'PUT',
                body: JSON.stringify(form),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw (await response.json()).detail || 'Error in request'
            }
            return  await response.json()
        } catch(error) {
            throw error;
        }
    },
    async delete(url) {
        try {
            const response = await fetch(`${this.urlServer()}${url}`, { method: 'DELETE' });
            // TODO Реализовать обработку ошибко разных с сервера,
            const body = response.json();
            return body;
        } catch(error) {
            throw error;
        }
    },
}
export default api;