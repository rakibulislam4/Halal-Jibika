
export const useLocalItems = () => {
        const data = localStorage.getItem('userData');
        if(data){
            const parsedData = JSON.parse(data);
            const { userData, user } = parsedData;
            return { userData, user };
        }
}