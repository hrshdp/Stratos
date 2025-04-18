import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})


export const upload = multer({
    storage,
})


// later update filename to have unique file names if files have same name it's a problem