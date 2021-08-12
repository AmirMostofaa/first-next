import styles from '../../styles/projects.module.css'
import Link from 'next/link'


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return {
        props: {projects: data}
    }
}

const index = ({projects}) => {
    return ( 
        <div className={styles.projects}>
            <h2>All Projects</h2>
            <div className={styles.project}>
                {
                    projects.map(project => (
                        <Link href={'/projects/' + project.id} key={project.id}>
                            <a  className={styles.single}>
                                <h3>{project.title}</h3>
                                <p>{project.body}</p>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div> 
    );
}
 
export default index;