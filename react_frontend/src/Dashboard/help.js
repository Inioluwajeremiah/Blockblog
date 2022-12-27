// https://stackoverflow.com/questions/70714690/buffer-is-not-defined-in-react-vite
// https://stackoverflow.com/questions/72221740/how-do-i-polyfill-the-process-node-module-in-the-vite-dev-server
// https://github.com/feross/buffer
// https://browserify.org/

// import { Buffer } from 'buffer' to use buffer. install via npm install Buffer

import { EditorState } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import './Draft.css';
import './RichTextStyle.css';
import '../../node_modules/draft-js/dist/Draft.css'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import RichTextEditor from '../RichText/RichText';

 // hande input file button
    // const GetFile = (event) => {
    //     event.preventDefault()
    //     const selectedImage = event.target.files[0];
    //     setFileImage(selectedImage);
         
    //     console.log(selectedImage);
    //     console.log();

    //     const blob = new Blob([selectedImage], {type: "image/*"})
    //     setBlobImage(blob);
    //     console.log(blob);
    //     let reader = new FileReader();
    //     reader.readAsArrayBuffer(selectedImage)
    //     reader.addEventListener("loadend", function() {
    //         console.log(reader.result);
    //         const uint8array = new Uint8Array(reader.result);
    //         imageToArray.push(uint8array);
    //         console.log(imageToArray);
    //         console.log("uint8array => ", uint8array);
    //      });
        
    // }

const [imageToArray, setImageToArray] = useState([]);
const [blobImage, setBlobImage] = useState(null);

const [editorState, setEditorState] = React.useState('');
    // () => EditorState.createEmpty(),