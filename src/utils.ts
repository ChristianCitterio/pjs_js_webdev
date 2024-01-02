import cors from "cors"

const allowedOrigins: any[] = ["http://localhost:8080", ]

const options: cors.CorsOptions = {
    origin: allowedOrigins,
};

export default options;