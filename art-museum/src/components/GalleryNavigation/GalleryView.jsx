import { useParams, Navigate } from 'react-router-dom';
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
     if(mygallery === ""){
        <Navigate to="/" replace={true}></Navigate>
     }
    
    return <h2>{mygallery.labeltext}</h2>
}
export default GalleryView