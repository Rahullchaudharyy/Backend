import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url)
        console.log('This is url data',url)
        if (url.pathname === '/') {
            return new Response('hie !!!',{status:200})
        } else if (url.pathname === '/login') {
            return new Response('I am auth ',{status:200})
        } else {
            return new Response( '404 Not found .',{status:404})
        }
    },
    port:3000,
    hostname:'127.0.0.1'
})
