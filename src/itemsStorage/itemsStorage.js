const itemsStorage = {
    get() {
        let h = window.localStorage.getItem("ITEMS")
        
        if (h === null) {
            h = []
            for (let i = 0; i <=25; i++) {
                h[i] = {pos: i, count: 0, item: ''}
            }
            h[0] = {pos: 0, count: 4, item: '/green.png'}
            h[1] = {pos: 1, count: 2, item: '/yellow.png'}
            h[2] = {pos: 2, count: 5, item: '/blue.png'}
            window.localStorage.setItem("ITEMS", JSON.stringify(h))
            return h
        }
        return JSON.parse(h)
    },
    set(val) {
        window.localStorage.setItem("ITEMS", JSON.stringify(val))
    },
    delete(id, count) {
        const lastCount = this.get()[id]
        window.localStorage.setItem("ITEMS", {id: lastCount-count})
    },
}

export {
    itemsStorage
}
