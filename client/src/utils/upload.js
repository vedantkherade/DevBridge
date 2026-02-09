import axios from "axios";

export const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "mern-project");
    try {
        let res = await axios.post("https://api.cloudinary.com/v1_1/dkl9b5bdh/image/upload", data);
        const { url } = res.data;
        return url;
    } catch (err) {
        console.log(err);
    }
};

export default upload;