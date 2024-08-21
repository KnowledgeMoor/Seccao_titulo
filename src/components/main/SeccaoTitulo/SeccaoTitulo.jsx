import ApresentacaoBox from "./ApresentacaoBox/ApresentacaoBox";
import ImageGallery from "./ImageGallery/ImageGallery";
import styles from "./SeccaoTitulo.module.css";

function SeccaoTitulo() {
    return (
        <> 
        <div className={styles.tituloContainer}>
            <ImageGallery/>
            <ApresentacaoBox/>
        </div>
        </>
    );
}

export default SeccaoTitulo;