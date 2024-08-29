import { getApiMenus } from "../../../modules/apiMenus";

type loadMenuProps = {
    setData: (data: []) => void
    setError: (error: string) => void
    setIsLoading: (isLoading: boolean) => void
}

export const loadDataMenus = async ({setData, setError, setIsLoading}: loadMenuProps) => {
    getApiMenus()
    .then((response) => {
        setData(response?.content)
    })
    .catch((error) => {
        setError(error.message)
    })
    .finally(() => {
        setIsLoading(false)
    })
}







