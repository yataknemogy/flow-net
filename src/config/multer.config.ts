import { diskStorage } from "multer";
import { v4 as uuid } from "uuid";
import { extname } from "path";

export const multerConfig = {
  storage: diskStorage({
    destination: "./uploads",

    filename: (req, file, callback) => {
      const uniqueName = `${uuid()}${extname(file.originalname)}`;
      callback(null, uniqueName);
    },
  }),
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
};
