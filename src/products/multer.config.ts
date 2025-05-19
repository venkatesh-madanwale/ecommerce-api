import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './prodimgs', // Image upload folder
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname); // gets .jpg, .png, etc.
      callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    },
  }),
};
