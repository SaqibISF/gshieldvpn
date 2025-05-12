import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import axiosInstance from '../lib/axiosInstance';
import { useEffect, useState } from 'react';

window.Pusher = Pusher;

const useEcho = () => {
    const [echoInstance, setEchoInstance] = useState(null);

    useEffect(() => {
        // We are going to create the Echo instance here...
        const echo = new Echo({
            broadcaster: 'reverb',
            key: process.env.NEXT_PUBLIC_REVERB_APP_KEY,
            authorizer: channel => {
                return {
                    authorize: (socketId, callback) => {
                        axiosInstance
                            .post('/broadcasting/auth', {
                                socket_id: socketId,
                                channel_name: channel.name,
                            })
                            .then(response => {
                                callback(false, response.data)
                            })
                            .catch(error => {
                                callback(true, error)
                                console.log(error);
                                
                            })
                    },
                }
            },
            wsHost: process.env.NEXT_PUBLIC_REVERB_HOST,
            wsPort: process.env.NEXT_PUBLIC_REVERB_PORT,
            wssPort: process.env.NEXT_PUBLIC_REVERB_PORT,
            forceTLS:
                (process.env.NEXT_PUBLIC_REVERB_SCHEME ?? 'https') === 'https',
            enabledTransports: ['ws', 'wss'],
        })
        setEchoInstance(echo)
    }, [])

    return echoInstance
}

export default useEcho