import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [isOnline, setIsOnLine] = useState(true);

    useEffect(()=>{

        const handleOnlineStatus = () => setIsOnLine(true);
        const handleOfflineStatus = () => setIsOnLine(false);

        window.addEventListener("online", handleOnlineStatus)
        window.addEventListener("offline", handleOfflineStatus);

        return()=>{
            window.removeEventListener("online", handleOnlineStatus)
            window.removeEventListener("offline", handleOfflineStatus)
        }
    },[])

    return isOnline;
}

export default useOnlineStatus;