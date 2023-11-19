export const formatCurrency = (amount: string | number) => {
    return (amount).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    });
};