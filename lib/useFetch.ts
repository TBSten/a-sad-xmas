import { useEffect, useState } from "react"

export default function useFetch<ResultType>(url: RequestInfo,option: RequestInit){
    const [progress,setProgress] = useState<"fetching"|"success"|"error">("fetching") ;
    const [result,setResult] = useState<ResultType>(null) ;
    useEffect(() => {
        function doFetch(){
            fetch(url,option).then(res=>res.json())
                .then((json)=>{
                    setResult(json) ;                
                    setProgress("success");
                })
                .catch((e)=>{
                    setResult(e);
                    setProgress("error");
                });
        }
        doFetch();
        return () => {
            setProgress("fetching");
            doFetch();
        }
    }, [url,option]);
    return {
        progress,
        result,
    } as const;
}

