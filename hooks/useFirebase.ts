import { app } from "../firebase/initialize";

const useFirebase = () => {
    return app;
};

export default useFirebase;