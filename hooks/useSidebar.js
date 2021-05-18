import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());

function useSidebar() {
  const { data, error } = useSWR('/api/categories/list', fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useSidebar;