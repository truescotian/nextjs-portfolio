import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());

function useCategories() {
  const { data, error } = useSWR('/api/categories', fetcher);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useCategories;