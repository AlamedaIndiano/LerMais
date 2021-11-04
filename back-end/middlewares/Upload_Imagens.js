const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/upload/site')
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1E9);

            cb(null, uniqueSuffix + "_" + file.originalname);
        }
    }),
    fileFilter: (req, file, cb) => {
        const ExtencoesPermitidas = ['image/png', 'image/jpg', 'image/jpeg'].find(FormatoAceito => FormatoAceito == file.mimetype);
        
        if(ExtencoesPermitidas){
            return cb(null, true);
        } 

        return cb(null, false);
    },
    limits: { 
        fieldSize: 5 * 1024 * 1024  
    }
}));