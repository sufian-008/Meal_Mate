import multer from "multer";

// Set up Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        console.log("📸 Multer received file:", file.originalname);
        const filename = `${Date.now()}${file.originalname}`;
        console.log("✅ Saved as:", filename);
        cb(null, filename);
    }
});

// Create multer upload instance
const upload = multer({ storage: storage });

export default upload;
