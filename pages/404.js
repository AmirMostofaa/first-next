import Link from 'next/link'
import { useEffect } from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        //console.log('useeffect run')

        setTimeout(() => {
            //router.go(1)
            router.push('/')

        }, 3000);
    }, [])

    return ( 
        <div className="not-found">
            <img src="/error.png" />
            <h2>Page cannot be found.</h2>
            <p>Go to the <Link href="/">Home Page</Link></p>
        </div>
     );
}
 
export default NotFound;