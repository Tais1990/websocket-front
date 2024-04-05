import Message from "./Message"
import {
    useQuery,
    useMutation,
    useQueryClient,
  } from 'react-query';
import messageAPI from '@/api/messageAPI'
import { useEffect } from "react";
import NewMessage from "../NewMessage/NewMessage";
const config = (await import(`@/../config.js`)).default(process.env.NEXT_PUBLIC_NODE_ENV)


export default function ListMessages() {
    const queryClient = useQueryClient();
    let query = useQuery('message');
    
    useEffect(() => {
        const websocket = new WebSocket(config.api.webSocketURL)    
        messageAPI.getAll().then((data) => {
            queryClient.setQueryData('message', () => data)            
        })
        websocket.onopen = () => {    
          console.log('connected')    
        }   
        websocket.onmessage = (event) => {
            const data = JSON.parse(event.data)    
            queryClient.setQueryData('message', () => data.message)      
          } 
        return () => {    
          websocket.close()    
        }    
      }, [queryClient])

    // Мутации
    const mutationDelete = useMutation(messageAPI.delete, {
        onSuccess: () => {
            queryClient.invalidateQueries('message');
        },
    });
    const mutationCreate = useMutation(messageAPI.send, {
        onSuccess: () => {
            queryClient.invalidateQueries('message');
        }
    })

    return (
        <div className="list-messages">
            {/* TODO Необходимо тут делать обработку ошибко и процесс загрузки */}
            <div>
                <ul>
                    {queryClient.getQueryData('message') && queryClient.getQueryData('message').map((item) => (
                    <li key={item.id}>
                        <Message id={item.id} text={item.text} onDelete={(id) => {
                            mutationDelete.mutate({id});
                        }}/>
                    </li>
                    ))}
                </ul>
                <NewMessage onSend={(text) => {
                    mutationCreate.mutate(text);
                }}/>
            </div>
        </div>
    )
}