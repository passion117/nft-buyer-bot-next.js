export default class Wallet {
    static mergeImport(currentWallets: any, importedWallets: any): any {
        const mergedWallets: any = currentWallets;
        if (!(currentWallets?.length > 0)) {
            return importedWallets;
        }
        if (importedWallets?.length > 0) {
            for (let i = 0; i < importedWallets.length; i++) {
                const foundIndex = currentWallets.findIndex((element: any) => { return element.address == importedWallets[i].address })
                if (foundIndex == -1) {
                    mergedWallets.push({...importedWallets[i],balance:0});
                }
            }
        }

        return mergedWallets;
    }
}