
// getting Specific ID
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map(project => {
        return {
            params: {id: project.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res =  await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    const data = await res.json();

    return {
        props: { project: data }
    }
    
}

const Details = ({project}) => {
    return ( 
        <div>
            <p>Id: {project.id}</p>
            <h1>{project.title}</h1>
            <p>{project.body}</p>
        </div>
     );
}
 
export default Details;