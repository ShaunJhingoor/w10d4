import { useParams } from 'react-router-dom';
function GalleryView(props){
    const data = props.data 
    const galleries = data.records 
    const galleryid = useParams(); 
    let mygallery = ""
     galleries.forEach(function(element){
       if(JSON.stringify(element.galleryid) === galleryid.galleryid){
            mygallery = element
       }
     })
    
    return <h2>{mygallery.theme}</h2>
}
export default GalleryView