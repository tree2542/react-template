import { useEffect, useState } from "react";

export function useFetch<T>(fetcher: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (isMounted) setLoading(true);
                const result = await fetcher();
                if (isMounted) setData(result);
            } catch (err) {
                if (isMounted) {
                    if (err instanceof Error) {
                        setError(err.message);
                    } else {
                        setError("Unknown error");
                    }
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [fetcher]);

    return { data, loading, error };
}