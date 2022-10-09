import QRCode from "qrcode";
import { useState } from "react";
import QRCodeBanner from "../src/QRCodeBanner.jpg"
import QRCodeBannerCopy from "../src/QRCodeBannerCopy.jpg"

function App() {

  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(url,{
      width: 500,
      padding: 4,
      color: {
        dark: '#003478'
      }
    }, (err, url) => {
      if (err)
        return console.error(err);
      console.log(url);
      setQrcode(url);
    })
  }
  return (
    <div className='app-container'>
      <div className='app-wrapper'>
        <h1>QrCode Generator</h1>
        <div>
          <input type='text'
            placeholder='https://www.google.com/'
            value={url}
            onChange={(evt) => setUrl(evt.target.value)}>
          </input>
        </div>
          <button onClick={GenerateQRCode}>Generate</button>
        {qrcode && <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png"><button>Download</button></a>
        </>}
      </div>
    </div>
  );
}

export default App;
