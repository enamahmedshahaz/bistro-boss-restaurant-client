import {
    useQuery,
} from '@tanstack/react-query';

import { useAuth } from "../hooks/useAuth";

import useAxiosSecure from './useAxiosSecure';

const useCart = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: cart = [] } = useQuery(
        {
            queryKey: ['cart', user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/cart?email=${user.email}`);
                return res.data;
            },
        });
    return [cart];
};

export default useCart;