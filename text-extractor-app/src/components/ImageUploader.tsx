import React ,{useState}from 'react'

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
    const[chosefile,setChoseFile]=useState('Choose file');
    const [selectImage, setSelectImage] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectImage(URL.createObjectURL(file));
            onImageUpload(file);
        }
    }
    const handleButtonClick = () => {
        
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
          fileInput.click();
        }
        setChoseFile("Start over");
      };
  return (
    <div className="d-flex flex-column align-items-center">
      <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange}
      style={{display:'none'}} />
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: '#4379F2', color: 'white', padding: '5px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        {chosefile}
      </button>

      {selectImage && (<img src={selectImage} alt="uploaded" style={{width:'250px',height:'250px'}} className='img-fluid'/>)}
    </div>
  )
}

export default ImageUploader
