export function domInject(selector: string) {
    return function (
        target: any,
        propertyKey: string

    ) {
        console.log(`modificando ${target.constructor.name} e add getter para ${propertyKey}`)
        let elemento: HTMLElement;
        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(selector)
                console.log(`Elemento: ${selector}, proprietyKey ${propertyKey}`)
            }
            return elemento
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        })
    }

}