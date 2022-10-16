export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Metodo ${propertyKey}`);
            console.log(`------ Parametros ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------ Retorno ${JSON.stringify(retorno)}`);
            return retorno;
        };
    };
}
//# sourceMappingURL=inspect.js.map