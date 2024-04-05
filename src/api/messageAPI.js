import api from './api.js'
const messageAPI = {
    async getAll() {
        try {
            const url = `message`
            let messages = await api.get(url)
            return messages ?? []
        } catch (er) {
            throw er
        }
    },
    async send(form) {
        try {
            return await api.post(`message`, form)
        } catch (error) {
            throw error
        }
    },
    async delete({id}) {
        try {
            return await api.delete(`message/${id}`)
        } catch (error) {
            throw error
        }
    }
}
export default messageAPI;