export function domInject(selector) {
    return function (target, propertyKey) {
        console.log(`modificando ${target.constructor.name} e add getter para ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log(`Elemento: ${selector}, proprietyKey ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
//# sourceMappingURL=domInject.js.map