const multer = require('multer');

const MIME_TYPES = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png'
};
const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'images');
	},
	filename: (req, file, callback) => {
		console.log("multer!!");
		console.log("multing file:", file);
		const name = file.originalname.split(' ').join('_').split('.')[0];
		console.log("multing name: ", name);
		const extension = MIME_TYPES[file.mimetype];
		console.log("multing ext: ", extension);
		callback(null, name + Date.now() + '.' + extension);
	}
});

module.exports = multer({storage: storage, limits:{fileSize: 1000000}}).single('file');