import {io} from 'socket.io-client'

const DOMAIN_NAME = 'https://activecycletire.onrender.com'
// const DOMAIN_NAME = 'http://localhost:5500'

export const socket = io()
