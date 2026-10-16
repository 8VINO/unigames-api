export const validarId = (id) => {
    const idNumero = Number(id);
    return Boolean(idNumero && !isNaN(idNumero) && idNumero > 0);
};