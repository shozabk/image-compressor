# Image Compressor React

Image Compressor React is a Javascript library to compress images using with lossless techniques before uploading them to the server.

## Installation

Use the package manager npm to install Image Compressor React.

```bash
npm install image-compressor-react
```

## Usage

```python
import { compressImage } from 'image-compressor-react'

# returns the compressed file
const compressedFile = await compressImage(inputFile)

const setting = {
quality: 0.5,
width: 100,
height: 100
}

const compressedFile = await compressImage(inputFile, setting)



```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)