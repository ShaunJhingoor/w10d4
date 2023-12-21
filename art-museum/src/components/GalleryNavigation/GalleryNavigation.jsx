import { NavLink } from "react-router-dom"
import './GalleryNavigation.css'
function GalleryNavigation(props){
    const data = props.data 
    const galleries = data.records 
    return (
     <nav> 
    <NavLink to="/">Harvard Art Museum</NavLink>
        <ul>
            {galleries.map(gallery => {
                return( <nav key= {gallery.id}>
                {/* <li>
                    {gallery.name}
                </li> */}
                <li>
                    <NavLink to= {`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                </li>
                </nav>
                )

            })}
        </ul>
        </nav>
    )
}
export default GalleryNavigation