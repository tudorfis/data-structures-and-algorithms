
export class BiluArray<T> {
    private items: T[];
    private count: number = 0;

    constructor(
        private length?: number    
    ) { 
        if (this.length) {
            this.items = new Array<T>(this.length);
            for (let index = 0; index < this.length; index++)
                this.items[index] = null;
        }
    }

    print(): void {
        for (let index = 0; index < this.count; index++) {
            const element = this.items[index];
            console.log(element);
        }
    }

    insert(item: T): void {
        if (this.items.length === this.count) {
            const newItems = new Array<T>(this.count*2);
            for (let i = 0; i < this.count; i++)
                newItems[i] = this.items[i];
            this.items = newItems;     
        }
        this.items[this.count++] = item;
    }
    
    removeAt(index: number): void {
        if (index < 0 || index >= this.count) 
            throw new Error()
        
        for (let i = index; i < this.count; i++)
            this.items[i] = this.items[i + 1];
        this.count--;
    }

    indexOf(item: T): number {
        // If we find it, return index
        // Otherwise retrun -1
        for (let i = 0; i < this.items.length; i++)
            if (this.items[i] === item) return i;
        return -1;
    }

    
}